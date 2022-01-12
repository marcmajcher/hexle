const border = 'https://static.majcher.com/hexle/tiles/100/border.png';
const desert = 'https://static.majcher.com/hexle/tiles/100/desert.png';
const forest = 'https://static.majcher.com/hexle/tiles/100/forest.png';
const hills = 'https://static.majcher.com/hexle/tiles/100/hills.png';
const jungle = 'https://static.majcher.com/hexle/tiles/100/jungle.png';
const mountain = 'https://static.majcher.com/hexle/tiles/100/mountain.png';
const plains = 'https://static.majcher.com/hexle/tiles/100/plains.png';
const swamp = 'https://static.majcher.com/hexle/tiles/100/swamp.png';
const wastes = 'https://static.majcher.com/hexle/tiles/100/wastes.png';
const water = 'https://static.majcher.com/hexle/tiles/100/water.png';

export const TileList = [
    border,
    desert,
    forest,
    hills,
    jungle,
    mountain,
    plains,
    swamp,
    wastes,
    water];

export const Tiles = {
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

