import type { Route } from "./+types";
import type { Project, StrapiResponse, StrapiProject } from "~/types";
import { useState } from "react";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export async function loader({
    request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/projects?populate=*`
    );
    const json: StrapiResponse<StrapiProject> = await res.json();

    const projects = json.data.map(item => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url
            ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
            : "/images/no-image.png",
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,
    }));

    return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const { projects } = loaderData as { projects: Project[] };

    const categories = [
        "All",
        ...new Set(projects.map(project => project.category)),
    ];
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  project => project.category === selectedCategory
              );

    const ProjectsPerPage = 4;
    const totalPages = Math.ceil(
        filteredProjects.length / ProjectsPerPage
    );
    const indexOfLastProject = currentPage * ProjectsPerPage;
    const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;
    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    return (
        <>
            <h1 className="text-3xl font-bold text-white mb-8">
                Projects
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1);
                        }}
                        className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}>
                        {category}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-3">
                    {currentProjects.map(project => (
                        <motion.div layout key={project.id}>
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default ProjectsPage;
