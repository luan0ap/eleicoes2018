const ufByCep = cep => fetch(`https://viacep.com.br/ws/${cep}/json/`).then(o => o.json())

export default ufByCep
