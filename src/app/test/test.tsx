import Layout from "components/layout/layout";
import classNames from 'classnames/bind';
import styles from './test.module.scss';

const cx = classNames.bind(styles);

export default function Test() {
	return (
		<Layout>
			<div className={cx('test-page-container')}>test page</div>
		</Layout>
	);
}
