import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon, Button, Menu } from 'semantic-ui-react';

export function Header(props) {
	const history = useHistory();

	const [showMenu, setShowMenu] = useState(false)

	return (
		<>
			<section>
				<Menu>
					<Menu.Item
						icon
						onClick={() => {console.log('hey');history.goBack()}}
						disabled={window.location.pathname === '/'}
					>
						<Icon name='chevron left' />
					</Menu.Item>

					<Menu.Item header>
						{props.children}
					</Menu.Item>


					<Menu.Item
						icon
						position='right'
						as={Button}
						onClick={() => setShowMenu(!showMenu)}
					>
						<Icon name={showMenu ? 'close' : 'bars'} />
					</Menu.Item>
				</Menu>
			</section>
			<aside className={`main-menu ${showMenu ? 'active' : ''}`}>
				<h2>Main menu</h2>
				<div className='button-list'>
					<Button as={Link} to='/settings'>
						Settings
					</Button>
					<Button as={Link} to='/reaction-history'>
						Reaction History
					</Button>
				</div>
			</aside> 
		</>
	);
}
