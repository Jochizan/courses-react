import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/usuarios.actions';

const Usuarios = ({ getUsers, usuarios }) =>  {

	useEffect(() => {
		getUsers();
	}, []) 

	const ponerFilas = () => usuarios.map((usuario, idx) => (
		<tr key={idx}>
			<td>
				{usuario.name}
			</td>
			<td>
				{usuario.email}
			</td>
			<td>
				{usuario.website}
			</td>
		</tr>
	));

	console.log(usuarios)

	return (
		<div>
			<table className="tabla">
				<thead>
					<tr>
						<th>
							Nombre
						</th>
						<th>
							Correo
						</th>
						<th>
							Enlace
						</th>
					</tr>
				</thead>
				<tbody>
					{ ponerFilas() }
				</tbody>
			</table>
		</div>
	)
};

const mapUsersProps = (reducers) => {
	return reducers.usuariosReducers;
}

export default connect(mapUsersProps, userActions)(Usuarios)