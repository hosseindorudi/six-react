import React, { useState } from 'react'
import './tableParent.css'


const TableBtn = () => {
    return (<td className="widgetLgStatus">
    <button className="Approved widgetLgButton">تصحیح</button>
    <button className="Pending widgetLgButton">ارسال</button>
    <button className="Declined widgetLgButton">حذف</button>
    </td>)
}
const TableIconBtn = () => {
    return (<td className="widgetLgStatus">
    <button className="Approved widgetLgButton"><i class='fas fa-edit'></i></button>
    <button className="Pending widgetLgButton"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
    <button className="Declined widgetLgButton"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>)
}

const TableParent = ({width}) => {

    const [sideBar, setSideBar] = useState(false);
  return (
    <div className='parrent'>
        <div className="left" style={{ width: sideBar ? 250 : 0 }}>
        <button  className="closebtn" onClick={() => {setSideBar(false)}}>&times;</button>
        <div className="switch-holder">
                
                <div className="switch-label">
                    <span>نام</span>
                </div>
                <div className="switch-toggle">
                    <input type="checkbox" id="name"/>
                    <label htmlFor="name"></label>
                </div>
            </div>

            <div className="switch-holder">
                <div className="switch-label">
                    <span>نام خانوادگی</span>
                </div>
                <div className="switch-toggle">
                    <input type="checkbox" id="lastName"/>
                    <label htmlFor="lastName"></label>
                </div>
            </div>
            <div className="switch-holder">
                <div className="switch-label">
                    <span>سن</span>
                </div>
                <div className="switch-toggle">
                    <input type="checkbox" id="age"/>
                    <label htmlFor="age"></label>
            </div>
        </div>
            <div className="switch-holder">
                <div className="switch-label">
                    <span>ایمیل</span>
                </div>
                <div className="switch-toggle">
                    <input type="checkbox" id="email"/>
                    <label htmlFor="email"></label>
            </div>
        </div>
            <div className="switch-holder">
                    <div className="switch-label">
                        <span>جنسیت</span>
                    </div>
                    <div className="switch-toggle">
                        <input type="checkbox" id="gender"/>
                        <label htmlFor="gender"></label>
                    </div>
            </div>
            <div className="switch-holder">
                    <div className="switch-label">
                        <span>شماره تماس</span>
                    </div>
                    <div className="switch-toggle">
                        <input type="checkbox" id="phone"/>
                        <label htmlFor="phone"></label>
                    </div>
            </div>
        </div>
        <div className="right"
        style={{ marginRight: sideBar ? 250 : 0 }}>

            <div className='parentMain'>
                <div className="top">
                <button className='columnBtn' onClick={() => {setSideBar(true)}}>دسته ها</button>
                </div>
                <div className="midle">
                <table className="widgetLgTable">
                <thead>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh" >نام</th>
                    <th className="widgetLgTh" >نام خانوادگی</th>
                    <th className="widgetLgTh">تاریخ تولد</th>
                    <th className="widgetLgTh" >ایمیل</th>
                    <th className="widgetLgTh" >جنسیت</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                    <th className="widgetLgTh">شماره تماس</th>
                </tr>
                </thead>
                <tbody>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                    
                        <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                        <span className="widgetLgName">حسین</span>
                        </td>
                        <td className="widgetLgDate">درودی</td>
                        <td className="widgetLgDate">1/1/1</td>
                        <td className="widgetLgAmount">h@gmail.com</td>
                        <td className="widgetLgAmount">مرد</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        <td className="widgetLgAmount">09312345678</td>
                        
                        
                        {width < 1011 ? <TableIconBtn/> : <TableBtn/>}
                    </tr>
                   
                
                   
                
                
                </tbody>
            </table>
                </div>
                
              
            </div>
            
            
        
        
        
        
            <div className="down">

                   
<ul className="page">
    <li className="page__btn"><button onClick={()=> console.log("clicked")} className="material-icons">&laquo;</button></li>
    <li  className="page__numbers"> 1</li>
    <li className="page__numbers active">2</li>
    <li className="page__numbers">3</li>
    <li className="page__numbers">4</li>
    <li className="page__numbers">5</li>
    <li className="page__numbers">6</li>
    <li className="page__dots">...</li>
    <li className="page__numbers"> 10</li>
    <li className="page__btn"><button className="material-icons">&raquo;</button></li>
</ul> 
</div>
        
        
        
        
        
        </div>
        
        
        
    </div>
  )
}

export default TableParent