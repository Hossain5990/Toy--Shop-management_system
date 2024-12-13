import useTitle from "../../Hooks/useTitle";


const Blog = () => {
    useTitle('Blog');
    return (
        <div className="grid lg:grid-cols-2 gap-5 lg:px-10 my-10">
            <div className="bg-sky-200 hover:bg-pink-200 p-5 " data-aos="fade-right"
            data-aos-duration="1000">
                <h2 className="font-bold">Welcome to Our Toy Wonderland!</h2>
                <p> <span className="font-bold"></span>At Toy store, we believe every toy has a story and deserves to be treasured. Our platform helps collectors, retailers, and toy enthusiasts manage their toy collections with ease and efficiency.</p>
            </div>
            <div className="bg-sky-200 hover:bg-pink-200 p-5" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="font-bold">Why Choose Us?</h2>
                <p> <span className="font-bold"></span>Organized Collection: Whether you're managing a personal collection or an inventory for your store, our system makes it easy to categorize and track your toys.</p>
            </div>
            <div className="bg-sky-200 hover:bg-pink-200 p-5" data-aos="zoom-in" data-aos-duration="1000">
                <h2 className="font-bold">Latest Updates</h2>
                <p> <span className="font-bold"></span>Stay tuned for upcoming features like wish lists, trading options, and advanced reporting tools! We’re continuously working to make our platform better for you.</p>
            </div>
            <div className="bg-sky-200 hover:bg-pink-200 p-5" data-aos="zoom-in"
                 data-aos-duration="1000">
                <h2 className="font-bold">Customer Support Assistance</h2>
                <p> <span className="font-bold"></span>Provide 24/7 chat or email support to help users with your platform or general toy collection advice.</p>
            </div>
        </div>
    );
};

export default Blog;