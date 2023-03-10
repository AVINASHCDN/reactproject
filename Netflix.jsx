import React, { Component } from 'react';
import styles from "./netflix.module.css";
class netflix extends Component {
    render() {
        return (
            <>
              <nav className={styles.navBlock}>
                <div className={styles.nav_container}>
                    <div className={styles.brand_logo}>
                        <a href="#" className={styles.logo}><img src="https://images.macrumors.com/t/NHqlhG61C83k3s52pVqY_qcD4kA=/2250x/article-new/2022/01/netflix1.jpg" alt="Brand-logo"  height="50px"/></a>
                    </div>
                    
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_item}><a href="#">Home</a></li>
                        <li className={styles.nav_item}><a href="#">Movies</a></li>
                        <li className={styles.nav_item}><a href="#">Sports+</a></li>
                        <li className={styles.nav_item}><a href="#">Premium</a></li>
                    </ul>
                    <div className={styles.searchfield}>
                        <input type="search"  className={styles.searchtext} placeholder='Search for Movies, Shows, Channels etc'/>
                    </div>
                    <div className={styles.login_btn}>
                        <button>LOGIN</button>
                    </div>
                    <div className={styles.sub_btn}>
                        <button>BUY PLAN</button>
                    </div>
                    
                    </div>
                    
            </nav> 
            </>
        );
    }
}

export default netflix;