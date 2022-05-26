import React, {useState, useEffect} from 'react'
import shirtsapi from './shirtsapi'
import {shirtsColorapi} from './shirtsapi'
import {size} from './shirtsapi'
import "./Buyingpage.css"
import colorsdata from './colorsdata'
import {accordian} from './shirtsapi'
import { useNavigate } from "react-router-dom";

export const Buyingpage = () => {
  const[largeimg,setLargeimg]=useState(0);
  const[image,setImage]=useState(shirtsapi);
  const[sizeColor,setsizeColor]=useState()
  const[circleColor,setcircleColor]=useState()
  const[activeAccordian,setActiveAccordian]=useState([])
  const[modal, setModal] = useState(false);
  const[on,setOn] = useState(false);

  return (
      <div className="headcantainer">
        <div className='partitioner'>

            <div>
            <button className="nextBtn">+</button>
                {
                  image.imgs.map((obj,i)=>{
                      return(
                        <div onClick={()=>setLargeimg(obj.id)}>
                          <img src={obj.src} alt="shirtimg" height="75px"/>
                        </div>
                        )
                    })
                }
                <button className="nextBtn">+</button>
            </div>

            <div className='largeimg'>
                <img src={image.imgs[largeimg].src} alt="Tshirt" height="600px"/>
            </div>
        </div>
        <div>
          <h2>Bewakoof</h2>
          <p>Men's Blue T-shirt</p>
          <span>4.4</span>
          <i>*</i>
         <h3>₹449</h3><strike>499</strike>
         <p>10% OFF</p>
         <p>inclusive all taxes</p>
         <p onClick={()=>setModal(true)}>BUY 3 FOR 999</p>
         <p>TriBe members get an extra discount of ₹40 and FREE shipping </p>
         <h4>COLOUR OPTIONS:</h4>
          {
            shirtsColorapi.colors.map((obj,i)=>{
                return(
                <div
                style={{backgroundColor: obj.name}}
                onClick={()=>setImage(colorsdata[obj.headid],setcircleColor(obj.id))}
                className={ i===circleColor?'activecircleoption':'normalcircleoption'}>

                </div>
                )

            })
          }
          <h4>SELECT SIZE</h4>
          {
            size.selectSize.map((obj,i)=>{
                return(
                <div className='sizeclass'>
                <button onClick={()=>setsizeColor(obj.id)}
                className={ i===sizeColor?'activesizeclass':'normalsizeclass'}>{obj.name}
                </button>
                </div>
                )
            })
          }
           {
            size.selectSize.map((obj,i)=>{
            return(
                <div>
                  {
                i===sizeColor?<span className='sizeLine'><span style={{color:"black"}}>Garment:</span>Chest (in Inch):<span style={{color:"black"}}>{obj.csize}</span>|
                Front Length (in Inch):<span style={{color:"black"}}>{obj.fsize}</span>|
                Sleeve Length (in Inch):<span style={{color:"black"}}>{obj.ssize}</span></span>:""
                    }
                </div>
                )
              })
            }
            {
          accordian.menu.map((obj,index)=>{
            //return <Accordian data={obj} />
            return(
              <div onClick={()=>{
                const arr = [ ...activeAccordian ];
                const index = arr.indexOf(obj.id);
                if (index > -1)
                  arr.splice(index, 1)
                else arr.push(obj.id)
                setActiveAccordian(arr)
                }}>
                {obj.question}
                {activeAccordian.includes(obj.id) ?accordian.menu[obj.id].answer:""}
              </div>
            )
          })
          }
          {/*  */}
        </div>
        {
          modal && <>
          <div className="backdrop" onClick={()=>setModal(false)} />
          <div className="modal">
            <img src="https://images.bewakoof.com/sizeguide/women_tshirts-1484026437.jpg" alt="size" className="backdropshirt"/>
            <div>
            <button onClick={()=>setOn(true)}>In</button> <button onClick={()=>setOn(false)}>Cms</button>
            {on?
            <table>
              <tr>
                <th>Size</th>
                <th>Bust (In Cms)</th>
                <th>Front Length (In Cms)	</th>
                <th>Sleeve Length (In Cms) </th>
              </tr>
              <tr>
                <td>XS</td>
                <td>106.7</td>
                <td>63.5</td>
                <td>18.4</td>
              </tr>
              <tr>
                <td>S</td>
                <td>111.8	</td>
                <td>66.0</td>
                <td>19.1</td>
              </tr>
              <tr>
                <td>M</td>
                <td>116.8</td>
                <td>68.6</td>
                <td>19.7</td>
              </tr>
              <tr>
                <td>L</td>
                <td>121.9	</td>
                <td>71.1</td>
                <td>20.3</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>127.0		</td>
                <td>73.7</td>
                <td>21.0</td>
              </tr>
              <tr>
                <td>2XL</td>
                <td>132.1		</td>
                <td>76.2</td>
                <td>21.6</td>
              </tr>
              <tr>
                <td>3XL</td>
                <td>137.2	</td>
                <td>78.7</td>
                <td>22.2</td>
              </tr>
            </table>:<table>
              <tr>
                <th>Size</th>
                <th>Bust (In Inch)</th>
                <th>Front Length (In Inch)	</th>
                <th>Sleeve Length (In Inch)  </th>
              </tr>
              <tr>
                <td>XS</td>
                <td>106.7</td>
                <td>63.5</td>
                <td>18.4</td>
              </tr>
              <tr>
                <td>S</td>
                <td>111.8	</td>
                <td>66.0</td>
                <td>19.1</td>
              </tr>
              <tr>
                <td>M</td>
                <td>116.8</td>
                <td>68.6</td>
                <td>19.7</td>
              </tr>
              <tr>
                <td>L</td>
                <td>121.9	</td>
                <td>71.1</td>
                <td>20.3</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>127.0		</td>
                <td>73.7</td>
                <td>21.0</td>
              </tr>
              <tr>
                <td>2XL</td>
                <td>132.1		</td>
                <td>76.2</td>
                <td>21.6</td>
              </tr>
              <tr>
                <td>3XL</td>
                <td>137.2	</td>
                <td>78.7</td>
                <td>22.2</td>
              </tr>
            </table>}
            </div>
            <div className="cross" onClick={()=>setModal(false)}>-</div>
          </div>
          </>
        }
    </div>
  )
}


const Accordian = (props) => {
  const[objAccordian,setobjAccordian]=useState(false)
  return (
    <div onClick={()=>setobjAccordian(!objAccordian)}>
      {props.data.question}
      {objAccordian?props.data.answer:""}
    </div>
  )
}
