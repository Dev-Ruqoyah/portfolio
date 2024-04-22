const Footer = () => {
    return ( <>
    
    <footer className="bg-purple-700">
        <div className="container mx-auto py-5">
            <div className="flex flex-col items-center justify-center">
            <h3 className="text-white font-semibold text-2xl">Dev-Ruqoyah</h3>
            <div className="social-links flex flex-row gap-3 items-center  mt-6">
                <i className="p-3 px-5 bg-white text-black rounded-full">f</i>
                <i className="p-3 px-5 bg-white text-black rounded-full">f</i>
                <i className="p-3 px-5 bg-white text-black rounded-full">f</i>
                <i className="p-3 px-5 bg-white text-black rounded-full">f</i>
            </div>
            <p className="text-white">Copyright ,All right reserved by <a href="http://github.com/Dev-Ruqoyah" target="_blank" rel="noopener noreferrer" className="">codewithDev-Ruqoyah</a></p>
            </div>
        </div>
    </footer>
    
    </> );
}
 
export default Footer;