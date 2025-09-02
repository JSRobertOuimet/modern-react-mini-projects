const ContactPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-6 py-6 bg-gray-900">
            <h1 className="text-3xl font-bold mb-8">Contact</h1>

            <form
                method="post"
                action="https://formspree.io/f/xovnlglz"
                className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
                        required
                    />
                </div>
                <button className="w-full text-white py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
