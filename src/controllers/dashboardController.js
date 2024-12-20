const dashboardModel = require('../models/dashboardModel');

function total_likes(req, res) {
    dashboardModel.total_likes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function total_noticias(req, res) {
    dashboardModel.total_noticias().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function total_transferencias(req, res) {
    dashboardModel.total_transferencias().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mais_publicacoes(req, res) {
    dashboardModel.listar_noticias_e_transf().then(function (resposta) {
        if (resposta.length > 0) {
            res.status(200).json(resposta);
            // console.log('Dados Transferencias', resposta)

        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

   
}

function qtd_publicacoes(req, res){
    var parametro = req.body.parametroServer;

    console.log("Dado controller: ", parametro)

    if( parametro == 1){
        dashboardModel.qtd_publicacoes_noticias().then(function (resposta) {
            if (resposta.length > 0) {
                res.status(200).json(resposta);
                console.log('Dados Noticias', resposta)
    
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });


    } else if (parametro == 2 ){
        dashboardModel.qtd_publicacoes_transferencias().then(function (resposta) {
                    if (resposta.length > 0) {
                        res.status(200).json(resposta);
                        console.log('Dados Transferencias', resposta)
            
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                });
    }else {
        console.log("Nenhum parametro recebido")
    }


    
}

function grafico_bar(req, res) {
    dashboardModel.grafico_bar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports ={total_likes,
                 total_noticias,
                 total_transferencias,
                 mais_publicacoes,
                 qtd_publicacoes,
                 grafico_bar
                 }