import Menu from './Menu';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex resize-x z-3 ">
            <Menu />
            <main className="bg-gray-100 resizable-x flex w-screen flex-grow-0 transition-all duration-300 static z-1">
                {children}
            </main>
        </div>
    );
};

export default Layout;