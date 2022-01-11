// const desert = '`.`';
// const forest = 'o8O';
// const hills = 'nmn';
// const jungle = '7S1';
// const mountain = '^^^';
// const plains = "'''";
// const swamp = 'i~i';
// const wastes = 'X*X';
// const water = '~~~';

import desert from './tiles/desert.png'
import forest from './tiles/forest.png'
import hills from './tiles/hills.png'
import jungle from './tiles/jungle.png'
import mountain from './tiles/mountain.png'
import plains from './tiles/plains.png'
import swamp from './tiles/swamp.png'
import wastes from './tiles/wastes.png'
import water from './tiles/water.png'

const Tiles = {
    '0000': wastes,
    '0001': mountain,
    '0002': mountain,
    '0010': mountain,
    '0011': mountain,
    '0012': mountain,
    '0020': mountain,
    '0021': mountain,
    '0022': mountain,
    '0100': swamp,
    '0101': hills,
    '0102': hills,
    '0110': hills,
    '0111': desert,
    '0112': plains,
    '0120': hills,
    '0121': plains,
    '0122': forest,
    '0200': water,
    '0201': hills,
    '0202': forest,
    '0210': hills,
    '0211': plains,
    '0212': forest,
    '0220': forest,
    '0221': forest,
    '0222': jungle,
    '1000': swamp,
    '1001': hills,
    '1002': hills,
    '1010': hills,
    '1011': desert,
    '1012': plains,
    '1020': hills,
    '1021': plains,
    '1022': forest,
    '1100': hills,
    '1101': desert,
    '1102': plains,
    '1110': desert,
    '1111': desert,
    '1112': desert,
    '1120': plains,
    '1121': desert,
    '1122': forest,
    '1200': hills,
    '1201': plains,
    '1202': forest,
    '1210': plains,
    '1211': desert,
    '1212': forest,
    '1220': forest,
    '1221': forest,
    '1222': jungle,
    '2000': water,
    '2001': hills,
    '2002': forest,
    '2010': hills,
    '2011': plains,
    '2012': forest,
    '2020': forest,
    '2021': forest,
    '2022': jungle,
    '2100': hills,
    '2101': plains,
    '2102': forest,
    '2110': plains,
    '2111': desert,
    '2112': forest,
    '2120': forest,
    '2121': forest,
    '2122': jungle,
    '2200': water,
    '2201': water,
    '2202': water,
    '2210': water,
    '2211': water,
    '2212': water,
    '2220': water,
    '2221': water,
    '2222': water,
};

/*
    Wastes:

    ⬛⬛
    ⬛⬛
    
    Water:
    
    🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 🟩🟩 ⬛🟩 🟩⬛
    ⬛⬛ ⬛🟨 ⬛🟩 🟨⬛ 🟨🟨 🟨🟩 🟩⬛ 🟩🟨 🟩🟩 ⬛⬛ ⬛⬛
    
    Mountain:
    
    ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛ ⬛⬛
    ⬛🟨 ⬛🟩 🟨⬛ 🟨🟨 🟨🟩 🟩⬛ 🟩🟨 🟩🟩
    
    Desert:
    
    ⬛🟨 🟨⬛ 🟨🟨 🟨🟨 🟨🟨 🟨🟨 🟨🟨 🟨🟩 🟩🟨 
    🟨🟨 🟨🟨 ⬛🟨 🟨⬛ 🟨🟨 🟨🟩 🟩🟨 🟨🟨 🟨🟨 
    
    Hills:
    
    ⬛🟨 ⬛🟨 ⬛🟨 ⬛🟨 ⬛🟩 ⬛🟩 🟨⬛ 🟨⬛ 🟨⬛ 🟨⬛ 🟨🟨 🟨🟩 🟩⬛ 🟩⬛ 🟩🟨
    ⬛🟨 ⬛🟩 🟨⬛ 🟩⬛ ⬛🟨 🟨⬛ ⬛🟨 ⬛🟩 🟨⬛ 🟩⬛ ⬛⬛ ⬛⬛ ⬛🟨 🟨⬛ ⬛⬛
    
    Plains:
    
    ⬛🟨 ⬛🟨 ⬛🟩 🟨⬛ 🟨⬛ 🟨🟨 🟨🟨 🟨🟩 🟨🟩 🟩⬛ 🟩🟨 🟩🟨
    🟨🟩 🟩🟨 🟨🟨 🟨🟩 🟩🟨 ⬛🟩 🟩⬛ ⬛🟨 🟨⬛ 🟨🟨 ⬛🟨 🟨⬛
    
    Marsh/Swamp:
    
    ⬛🟨 🟨⬛
    ⬛⬛ ⬛⬛
    
    Forest:
    
    ⬛🟨 ⬛🟩 ⬛🟩 ⬛🟩 ⬛🟩 🟨⬛ 🟨🟨 🟨🟩 🟨🟩 🟨🟩 🟨🟩 🟩⬛ 🟩⬛ 🟩⬛ 🟩⬛ 🟩🟨 🟩🟨 🟩🟨
    🟩🟩 ⬛🟩 🟨🟩 🟩⬛ 🟩🟨 🟩🟩 🟩🟩 ⬛🟩 🟨🟩 🟩🟨 🟩⬛ ⬛🟩 🟨🟩 🟩⬛ 🟩🟨 🟨🟩 🟩⬛ 🟩🟨
    
    Jungle:
    
    ⬛🟩 🟨🟩 🟩⬛ 🟩🟨
    🟩🟩 🟩🟩 🟩🟩 🟩🟩
    
    🟩🟨
    ⬛🟩
    
*/

export default Tiles;