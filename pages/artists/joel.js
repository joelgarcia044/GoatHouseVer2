import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function JoelPage(){
    return(
        <div>joel Leone
            <p>This is where the bio will go.</p>
            <div className={styles.card}>
            <Image src="/joel/joel2.jpg" height="300px" width="300px"/>
            <Image src="/joel/joel3.jpg" height="300px" width="300px"/>
            <Image src="/joel/joel4.jpg" height="300px" width="300px"/>
            </div>
        </div>
        
    )
} export default JoelPage;