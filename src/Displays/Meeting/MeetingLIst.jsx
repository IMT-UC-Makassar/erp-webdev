import '../../Styles/App.css'
import Header from "../../Components/Header/header.jsx"
import Footer from "../../Components/Footer/footer.jsx"
import Menu from "../../Components/HamburgerMenu/menu.jsx"
import Button from "../../Components/Button/Button.jsx"
import TableList from "../../Components/Table/tableList.jsx"
import Table from "../../Components/Table/table.jsx"


function MeetingList(){
    return(
        <>
        <div className='h-screen w-screen'>
        <Header className={'h-[10%] bg-white'} />
            <Menu className={'h-[5%]'}/>
                <div className='flex justify-center h-[73%]'>
                    <div className=''>
                        <div className='bg-blue-500 flex justify-start rounded-tl-xl rounded-tr-xl '>
                            <p className='px-2 py-3 text-white'>Meeting List</p>
                        </div>
                        
                        <div className='bg-blue-200 flex justify-start rounded-bl-xl rounded-br-xl h-[545px]'>
                            <Table></Table>
                        </div>
                    </div>
                </div>
            <Footer className={'mt-3 h-[10%]'}/>
        </div>
        </>
    )
}

export default MeetingList