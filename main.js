function y(...list){
    let toq = 0
    let juft = 0
    let matn = ""
    let s = 0, a = 0, l = 0, o = 0, m = 0  
    for(let i of list){
        if(typeof(i) === "number"){
            if(i % 2 == 0 && i != 1){
                toq += i
            }else {
                juft += i
            }
        }else if(typeof(i) === "string"){
            matn += i.split('')
        }
    }
    for(let salom of matn){
        if(salom === "S" || salom === "s"){
            s++
        }else if(salom === "a"){
            a++
        }else if(salom === "l"){
            l++
        }else if(salom === "o"){
            o++
        }else if(salom === "m"){
            m++
        }
    }
    return ` Toq = ${toq}\nJuft = ${juft}\nSalom = ${Math.round((s + a + l + o + m) / 5)}`
}
let x = y(1, 18, 21, 34, 45, 52, 63, 65, 79, 82, 108, 110, 114, 119, 120, 122, 130, 132, 133, 152, 179, 194, 196, 202, 212, 225, 228, 241, 255, 269, 271, 278, 293, 297, 301, 306, 321, 340, 347, 366, 372, 397, 399, 404, 420, 429, 442, 457, 473, 502, 518, 520, 536, 538, 539, 548, 554, 558, 562, 564, 575, 577, 578, 586, 592, 597, 610, 637, 641, 649, 663, 677, 685, 697, 725, 737, 744, 759, 775, 797, 800, 816, 824, 831, 838, 840, 849, 853, 874, 897, 900, 907, 925, 934, 946, 947, 948, 949, 977, 996, "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") 
alert(x)