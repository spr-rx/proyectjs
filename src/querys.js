const connection = require('./connection');

const getAllUsuarios = async () => {
    const [query] = await connection.execute('SELECT * FROM usuarios');
    return query
};

const todosReportes = async () => {
    const [query] = await connection.execute('SELECT * FROM reportes');
    return query
};

const todosCarpetas = async () => {
    const [query] = await connection.execute('SELECT * FROM carpetas');
    return query
};





const getAllCarpetas = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM carpetas WHERE id_usuario = ? `, [id]);
    return query
};

const getAllReportes = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM reportes WHERE id_usuario = ? `, [id]);
    return query
};


const getAllReportesCarpeta = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM reportes WHERE id_carpeta = ? `, [id]);
    return query
};








const getUsuariosById = async (id) => { 
    const [query] = await connection.execute(`SELECT * FROM usuarios WHERE id = ?`, [id]);
    return query
} 
 
const detalleUsuarios = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM usuarios WHERE id = ?`, [id]);
    return query
    
}


const detalleCarpetas = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM carpetas WHERE id_usuario = ?`, [id]);
    return query
    
} 


const detalleSubCarpetas = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM reportes WHERE id_carpeta = ?`, [id]);
    return query
    
}

const createUser = async (nombre, rol, ruc, password) => {
    const [query] = await connection.execute(`INSERT INTO usuarios (nombre_empresa, id_rol, ruc, password) VALUES (?, ?, ?, ?)`, [nombre, rol, ruc, password]);
    const item = await getUsuariosById(query.insertId)
    return item;    
}

const createCarpeta = async (id, fecha) => {
    // Verifica que los valores no sean undefined
    if (id !== undefined && fecha !== undefined) {
        const [query] = await connection.execute(`INSERT INTO carpetas (id_usuario, fecha) VALUES (?, ?)`, [id, fecha]);
        const item = await getUsuariosById(query.insertId);
        return item;    
    } else {
        // Si alguno de los valores es undefined, lanza un error o maneja el caso según tus necesidades
        throw new Error('Los valores de id y fecha no pueden ser undefined.');
    }
}

const login = async(ruc, password) => {
    const [query] = await connection.execute(`SELECT * FROM usuarios WHERE ruc = ? and password = ?`, [ruc, password] );
    if (query.length > 0) {
        return true;
    }else{
        return null
    }
}

const updateUser = async (id, nombre, rol, ruc, password) => {
    const item = await getUsuariosById(id);
    if (item.length === 0) {
        return null;
    }
    const [query] = await connection.execute(`UPDATE usuarios SET nombre_empresa = ?, id_rol = ?, ruc = ?, password = ? WHERE id = ?`, [nombre, rol, ruc, password, id] );
    return query
} 


const deleteUser = async (id) => {
    try {
        const item = await getUsuariosById(id);
        if (item.length === 0) {
            return null;
        }
        const [query] = await connection.execute(`DELETE FROM usuarios WHERE id = ?;`, [id]);
        return query;
    } catch (error) {
        console.error(error);
        throw error; // Lanza el error para que puedas verlo en la consola
    }
}

const deleteCarpeta = async (id) => {
    try {
        const item = await getUsuariosById(id);
        if (item.length === 0) {
            return null;
        }

        
        

        const [query] = await connection.execute(`DELETE FROM carpetas WHERE id = ?;`, [id]);
        return query;
    } catch (error) {
        console.error(error);
        throw error; // Lanza el error para que puedas verlo en la consola
    }
}






//falta el delete

//https://community.listopro.com/realiza-un-crud-en-mysql-con-node-js/



module.exports = {getAllUsuarios, getAllReportesCarpeta, getUsuariosById,getAllReportes, todosCarpetas, todosReportes, createUser, updateUser, deleteUser, detalleUsuarios, getAllCarpetas, detalleCarpetas, detalleSubCarpetas,createCarpeta,deleteCarpeta}