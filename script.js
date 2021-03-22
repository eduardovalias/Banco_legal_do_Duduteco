var clientes = 
    [
        [
            nome = 'Bruno',
            código = '123',
            senha = '123',
            saldo = 100
        ],
        [
            nome = 'Joãozinho',
            código = '456',
            senha = '456',
            saldo = 10
        ],
    ]

function rodar_script()
{
    document.getElementById('console').innerHTML = "";
    
    var codigo = window.prompt('Digite o seu código')
    var senha = window.prompt('Digite sua senha')
    
    function procura_cliente(cliente)
    {
        return cliente[1] == codigo && cliente[2] == senha
    }
        
    var cliente_localizado = clientes.find(procura_cliente)

    if(cliente_localizado == undefined)
    {
        document.getElementById('console').innerHTML = 'Senha ou código inválidos'
    }
    else
    {
        var resposta = 'sim'
        while(resposta.toLowerCase() == 'sim')
        {
        var today = new Date();
        var time = today.getHours();
        switch(true)
        {
            case(time >= 6 && time <= 12):
                var operacao = Number(window.prompt(`Bom dia ${cliente_localizado[0]}, qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia`))
                break;
            case(time > 12 && time <= 18):
                var operacao = Number(window.prompt(`Boa tarde ${cliente_localizado[0]}, qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia`))
                break;
            case(time > 18 && time <=23):
                var operacao = Number(window.prompt(`Boa noite ${cliente_localizado[0]}, qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia`))
                break;
            case(time >= 0 && time <6):
                var operacao = Number(window.prompt(`Boa noite ${cliente_localizado[0]}, qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia`))
                break;
            default:
                console.log('vish kk')
        }
        switch(operacao)
        {
            case(1):
                var valor_saque = null
                while(valor_saque == null)
                {
                    valor_saque = Number(window.prompt('Qual valor você quer sacar? (Digite "0" para cancelar a operação'))
                    console.log(valor_saque)    
                    if(valor_saque > cliente_localizado[3] || valor_saque < 0 || isNaN(valor_saque))
                    {
                        alert('O saque não pode ser realizado')
                        valor_saque = null
                    }
                    else if(valor_saque == 0)
                    {
                        document.getElementById('console').innerHTML = 'Operação cancelada'
                    }
                    else
                    {
                        cliente_localizado[3] = cliente_localizado[3] - valor_saque
                        document.getElementById('console').innerHTML = `Operação realizada com sucesso, seu novo saldo é de ${cliente_localizado[3]} reais`
                    }
                }
                break;
            case(2):
                var valor_deposito = null
                while(valor_deposito == null)
                {
                    valor_deposito = Number(window.prompt('Qual o valor que você deseja depositar? (Digite "0" para cancelar a operação'))
                    if(valor_deposito < 0 || isNaN(valor_deposito))
                    {
                        alert('O depósito não pode ser realizado')
                        valor_deposito = null
                    }
                    else if(valor_deposito == 0)
                    {
                        document.getElementById('console').innerHTML = 'Operação cancelada'
                    }
                    else
                    {
                        cliente_localizado[3] = cliente_localizado[3] + valor_deposito
                        document.getElementById('console').innerHTML = `Operação realizada com sucesso, seu novo saldo é de ${cliente_localizado[3]} reais`
                    }
                }
            break;
            case(3):
                var valor_transf = null
                while(valor_transf == null)
                {
                    var conta_transf = Number(window.prompt('Qual é o número da conta que deseja transferir para? (Digite "0" para cancelar)'))
                    var cliente_transf = clientes.find(procura_trasnf)
                    function procura_trasnf(cliente)
                    {
                        return cliente[1] == conta_transf
                    }
                    if(cliente_transf != undefined)
                    {
                        if(conta_transf != cliente_localizado[1])  
                        {
                            valor_transf = Number(window.prompt('Qual é o valor a ser transferido? (Pressione "0" para cancelar a operação'))
                            if(valor_transf > cliente_localizado[3] || valor_transf < 0 || isNaN(valor_transf))
                            {
                                alert('A transferência não pode ser realizada')
                                valor_transf = null
                            }
                            else if (valor_transf == 0)
                            {
                                document.getElementById('console').innerHTML = 'Operação cancelada'
                            }
                            else
                            {
                                cliente_localizado[3] = cliente_localizado[3] - valor_transf
                                cliente_transf[3] = cliente_transf[3] + valor_transf
                                document.getElementById('console').innerHTML = `A transferência foi realizada com sucesso, seu novo saldo é de ${cliente_localizado[3]} reais`
                            }
                        }
                        else
                        {
                            alert('A transferência não pode ser realizada')
                            valor_transf = null
                        }
                    }
                    else if(conta_transf == 0)
                    {
                        document.getElementById('console').innerHTML = 'Operação cancelada'
                        valor_transf = 0
                    }
                    else
                    {
                        alert('Não foi possível achar uma conta com esse código, tente novamente')
                    }
                }
                break;
            default:
                alert("Operação inválida, tente novamente")
                document.getElementById('console').innerHTML = "Operação inválida, tente novamente"
            }
            resposta = window.prompt('Você deseja fazer alguma outra operação?')
        }
    }      
}