function ranked(nome,vitorias){
    let rank    

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";  
    } else if (vitorias >=21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >=51 && ,vitorias <= 80) {
        rank = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    } console.log(`O Herói de nome ${nome[0]} está com saldo de vitórias de ${nome[1]-nome[2]}, e está no nível ${rank}.`)
    }

    const heroi = ["Goku", 50, 10]
    const vitoriasXDerrotas = (heroi[1] - heroi[2])
 

    const heroi1 = ["Gon", 70, 10]
    const vitoriasXDerrotas1 = (heroi1[1] - heroi1[2])

    const heroi2 = ["Ichigo", 150, 0]
    const vitoriasXDerrotas2 = (heroi2[1] - heroi2[2])
    
    
rankedHero (heroi,vitoriasXDerrotas)
rankedHero (heroi1,vitoriasXDerrotas1)
rankedHero (heroi2,vitoriasXDerrotas2)