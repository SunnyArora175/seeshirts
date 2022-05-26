import './Home.css';
import data from '../Api';
import Menu from '../Navbar/menubar/Menu';
import Blueprint from '../blueprint/Blueprint';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
    <Menu/>
    <Blueprint data={data['banner']} height="500px"/>
    <Blueprint data={data['Middle banner']}/>
    <div className="smbmargin">
    <Blueprint data={data['small_middle_banner']} height="130px" imgStyle={styles.block} />
    </div>
    <Footer/>
    </div>
  );

}

const styles = {
  block: {
    borderRadius: 10,
  },
}

export default Home;
