import React from "react";
import styles from "../styles/HomePage.module.scss";
import centerImage from "../img/toolsIcon.png";
import circle from "../img/circle.png";
import logo from "../img/logo.png";

const HomePage = () => {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.main_image}>
					<div className={styles.image}>
						<div className={styles.image_first}>
							<img
								src={centerImage}
								alt=''
							/>
							<div className={styles.image_last}>
								<img
									src={circle}
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.main_text}>
					<div className={styles.text_title}>
						Sorry, we’re down for maintenance
					</div>
					<div className={styles.text_sub_title}>Please check back later!</div>
				</div>
			</div>
			<a
				href="/"
				className={styles.logo}
			>
				<img
					src={logo}
					alt="logo"
				/>
			</a>
		</>
	);
};

export default HomePage;
