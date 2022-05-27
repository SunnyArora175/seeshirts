import './Home.css';
import {men, woman,accessories} from '../Api';
import Menu from '../Navbar/menubar/Menu';
import Blueprint from '../blueprint/Blueprint';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function Home(props) {
  const obj = {
    'men': men,
    'women': woman,
    'accessories': accessories
  };

  const data = obj[props.cat || 'men'];

  return (
    <div>
    <Menu/>
    {
      (props.cat == 'accessories')?
      <div>
        <Blueprint data={data['banner']} height="500px"/>
        <div className="smbmargin">
          <Blueprint data={data['small_middle_banner']} height="130px" imgStyle={styles.block} />
        </div>
      </div>
      :
      <div>
        <Blueprint data={data['banner']} height="500px"/>
        <Blueprint data={data['Middle_banner']}/>
        <div className="smbmargin">
          <Blueprint data={data['small_middle_banner']} height="130px" imgStyle={styles.block} />
        </div>
      </div>
    }
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
