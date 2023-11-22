import { useState, useEffect } from 'react';
import { 
    UserListContainer, 
    UserTable, 
    TableHeader, 
    TableData, 
    PaginationContainer, 
    ActionButtonsContainer, 
    NoUsersMessage, 
    PageSizeSelector, 
    ActionButton,
    NavigationButton
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from '../../actions';
import { FaSync, FaTrash } from 'react-icons/fa';

function ReadUsers() {
    const [pageSize, setPageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    useEffect(() => {
        if(users.length > 0){
            const totalPages = Math.ceil(users.length / pageSize);
            setTotalPage(totalPages);
        }
    }, [users])

    const handlePageSizeChange = (event) => {
        setPageSize(Number(event.target.value));
    };

    const handlePreviousPage = () => {
        if(pageNumber > 0){
            setPageNumber(pageNumber-1);
        }
    };

    const handleNextPage = () => {
        if(pageNumber < totalPage){
            setPageNumber(pageNumber+1);
        }
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
        dispatch(fetchUsers());
    }

    const handleUpdateUser = (userId) => {
        
    }

    return (
        <UserListContainer>
            {
                loading ? (
                    <></>
                ) : (
                    users.length > 0 ? (
                        <UserTable>
                            <thead>
                                <tr>
                                    <TableHeader>Nombre</TableHeader>
                                    <TableHeader>Email</TableHeader>
                                    <TableHeader>Edad</TableHeader>
                                    <TableHeader>Acciones</TableHeader>
                                </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (
                                <tr key={user.usuarioId}>
                                <TableData>{user.nombre}</TableData>
                                <TableData>{user.correo}</TableData>
                                <TableData>{user.edad}</TableData>
                                <TableData>
                                    <ActionButtonsContainer>
                                    <ActionButton 
                                        color="#FFA500" 
                                        hoverColor="#FF8C00" 
                                        title="Actualizar Usuario"
                                        onClick={() => handleUpdateUser(user.usuarioId)}
                                    >
                                        <span><FaSync /></span>
                                    </ActionButton>
                                    <ActionButton 
                                        color="#FF0000" 
                                        hoverColor="#DC143C" 
                                        title="Eliminar Usuario"
                                        onClick={() => handleDeleteUser(user.usuarioId)}
                                    >
                                        <span><FaTrash /></span>
                                    </ActionButton>
                                    </ActionButtonsContainer>
                                </TableData>
                                </tr>
                            ))}
                            </tbody>
                        </UserTable>
                    ) : (
                        <NoUsersMessage>No se encontraron usuarios.</NoUsersMessage>
                    )
                )
            }
            <PaginationContainer>
                <div>
                    <NavigationButton onClick={() => handlePreviousPage} title="Pagina Anterior">{"<"}</NavigationButton>
                    Página {pageNumber} de {totalPage} 
                    <NavigationButton onClick={() => handleNextPage} title="Pagina Siguiente">{">"}</NavigationButton>
                </div>
                <div>
                    <label>Mostrar: </label>
                    <PageSizeSelector onChange={() => handlePageSizeChange} value={pageSize}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </PageSizeSelector>
                </div>
            </PaginationContainer>
        </UserListContainer>
    );
}
  
export default ReadUsers;