import Header from './Header';
import Menu from './Menu';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-grow bg-gray-100">
                <Menu/>
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;