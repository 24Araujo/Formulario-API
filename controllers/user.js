import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios"

    db.query(q, (err, data) =>  {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const q = 
        "INSERT INTO usuarios(`nome_usuario`, `senha`, `nome_empresa`, `cnpj`, `cep`, `endereco`, `numero_endereco`, `telefone`, `email`) VALUES(?)";
    
     const values = [
        req.body.nome_usuario,
        req.body.senha,
        req.body.nome_empresa,
        req.body.cnpj,
        req.body.cep,
        req.body.endereco,
        req.body.numero_endereco,
        req.body.telefone,
        req.body.email,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
}

export const updateUser = (req, res) => {
    const q = 
    "UPDATE usuarios SET `nome_usuario` = ? , `senha`= ?, `nome_empresa`= ?, `cnpj`= ?, `cep`= ?, `endereco`= ?, `numero_endereco`= ?, `telefone`= ?, `email`= ? WHERE `id` = ?";

    const values = [
        req.body.nome_usuario,
        req.body.senha,
        req.body.nome_empresa,
        req.body.cnpj,
        req.body.cep,
        req.body.endereco,
        req.body.numero_endereco,
        req.body.telefone,
        req.body.email,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso")
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso");
    });
};
