import Layout from "components/layout/layout";

import classNames from 'classnames/bind';
import styles from './page.module.scss';
const cx = classNames.bind(styles);

export default function Home() {
	return (
		<Layout>
			<div className={cx('homepage-container')}>homepage</div>
		</Layout>
	);
}
