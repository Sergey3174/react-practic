import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUserRole } from '../../selectors';
import { ERROR } from '../../constans';
import { checkAccess } from '../../utils/check-access';

export const PrivateContent = ({ children, access, ServerError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCES_DENIED;

	const error = ServerError || accessError;

	return error ? <Error error={error} /> : children;
};
