
let alldata = [
    {
        data: "Walken Sheesham Wood Bed with Full Drawer Storage (King Size, Walnut Finish)By Wooden Street",
        price: "RS 43,898 ",
        ruprs: "RS 71,999",
        rate: "(1K)",
        off: "39% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fwalken-bed-with-storage%2Fupdated%2Fupdated%2Fwalnut%2F1-750x650.jpg",
        category: "bades",
    },
    {
        data: "Adolph Bedside Table (Honey Finish)By Wooden Street",
        price: "RS 6,898 ",
        ruprs: "RS 14,999",
        rate: "(309)",
        off: "55% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbedside-tables%2Fadolph-bedside-table%2Frevised%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Della Sofa Cum Bed With Armrests (Honey Finish)",
        price: "RS 44,898 ",
        ruprs: "RS 64,999",
        rate: "(279)",
        off: "25% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fdella-wooden-sofa-cum-bed-with-armrests%2Frevised%2Fhoney%2Fupdated%2F2-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Adolph Dressing Table With Storage Stool ",
        price: "RS 27,898 ",
        ruprs: "RS 45,999",
        rate: "(874)",
        off: "24% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables%2Fadolph-dressing-table-with-storage-stool%2Fresize%2Fwalnut-finish%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Aza Multicolor Floral and Stem Sheeting Bedsheet",
        price: "RS 1,898 ",
        ruprs: "RS 4,999",
        rate: "(69)",
        off: "40% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Findus-images%2Fstore-display%2Faza-multi-coloour-floral-and-stem-sheeting%2F1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Boho Trunk Box (Honey Finish)",
        price: "RS 23,898 ",
        ruprs: "RS 41,999",
        rate: "(90)",
        off: "56% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftrunk-blanket-boxes-ws%2Fboho-trunk-box%2Fupdated%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "boxes",
    },
    {
        data: "Wick Metal Golden Table Lamp",
        price: "RS 3,898 ",
        ruprs: "RS 12,999",
        rate: "(50)",
        off: "76% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Flamps-lighting%2Ftable-lamp%2Fhora-metal-golden-table-lamp%2Fupdaed%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Penguin Ortho-Memory Mattress (6 inch, King Siz",
        price: "RS 14,898 ",
        ruprs: "RS 34,999",
        rate: "(7K)",
        off: "69% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fmattress%2Fupdated%2Fortho-memory-mattress%2Fupdated%2Fsingle%2F6-inch%2Fupdated%2F1-750x650.jpg",
        category: "Bedmantent",
    },
    {
        data: "Sharon Sheesham Wood Dressing Table with Long ",
        price: "RS 65,898 ",
        ruprs: "RS 99,999",
        rate: "(1K)",
        off: "76% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables%2Fsharon-dressing-table-revised%2Fupdated%2Fwalnut%2Fupdated%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "White Wooden Wall Hanging Single Photo Frame by Random",
        price: "RS 598 ",
        ruprs: "RS 899",
        rate: "(309)",
        off: "29% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Frandom%2Fwhite-wooden-wall-hanging-single-photo-frame%2FR-1-750x650.jpg",
        category: "photo",
    },
    {
        data: "Sereta Sheesham Wood Sofa Cum Bed (King Size)",
        price: "RS 42,898 ",
        ruprs: "RS 94,999",
        rate: "(479)",
        off: "59% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fsereta-sofa-cum-bed%2Fupdated%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Aislin Trunk Box",
        price: "RS 18,898 ",
        ruprs: "RS 34,999",
        rate: "(34)",
        off: "24% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fjodhpur-products%2Faislin-trunk-box%2F1-750x650.jpg",
        category: "boxes",
    },
    {
        data: "Hailey Engineered Wood Wall-Mounted Tv Unit with Shelf(Exotic Teak Finish)By Wooden Street",
        price: "RS 12,599 ",
        ruprs: "RS 21,745",
        rate: "(98)",
        off: "48% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Fhailey-wall-mounted-tv-unit%2Fexotic%2Fupdated+new%2Fupdated%2F1-750x650.jpg",
        category: "tvunits",
    },
    {
        data: "Morse Wall Mounted Dressing Table (Honey Finish) ",
        price: "RS 11,898 ",
        ruprs: "RS 34,999",
        rate: "(74)",
        off: "36% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables%2Fmorse-wall-mount-dressing-table%2Frevised%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Wick Metal black Table Lamp",
        price: "RS 3,898 ",
        ruprs: "RS 12,999",
        rate: "(47)",
        off: "35% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Flamps-lighting%2Ftable-lamp%2Fwick-metal-black-table-lamp%2Fupdated%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Yellow and Pink Floral Screen Print 120 TC Bed Sheet",
        price: "RS 998 ",
        ruprs: "RS 1,999",
        rate: "(43)",
        off: "45% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FSuprint-Screen-Designs%2Fs-3%2Fupdated%2F1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Black And White Decorative Wall Photo Frames - Set of 6 By Random",
        price: "RS 1,498 ",
        ruprs: "RS 2,899",
        rate: "(39)",
        off: "31% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Frandom%2Fblack-and-white-decorative-wall-photo-frames-set-of-6%2FR-2-750x650.jpg",
        category: "photo",
    },
    {
        data: "Nectar Sofa Cum Bed With Box Storage (Exotic Tec)",
        price: "RS 35,898 ",
        ruprs: "RS 74,999",
        rate: "(799)",
        off: "53% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds-mdf%2Fectar-sofa-cum-bed-with-box-storage%2Fexotic-teak%2Fupdated-new%2F1-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Adolph Sheesham Wood Bed With Side Storage (King Size, Honey Finish)By Wooden Street",
        price: "RS 45,898 ",
        ruprs: "RS 77,999",
        rate: "(619)",
        off: "41% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fadolph-bed-with-side-storage%2Frevised%2Frevised%2Fhoney%2Fupdated%2Fhoney%2F1-750x650.jpg",
        category: "bades",
    },
    {
        data: "Zara Metal Table Lamp",
        price: "RS 6,898 ",
        ruprs: "RS 34,999",
        rate: "(54)",
        off: "86% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Flamps-lighting%2Ftable-lamp%2Fzara-metal-table-lamp%2Fupdated%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Iksha Teak Wood Dressing Table (Teak Finish)",
        price: "RS 48,898 ",
        ruprs: "RS 79,999",
        rate: "(67)",
        off: "65% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables%2Fcalix-teak-wood-dressing-table-teak-finish%2Fupdated%2Fproduct%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Gopher Woven Trunk Box (Red)",
        price: "RS 8,898 ",
        ruprs: "RS 14,999",
        rate: "(5)",
        off: "48% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftrunk-blanket-boxes-ws%2Fgopher-woven-trunk-box-red%2Fupdated%2F1-750x650.jpg",
        category: "boxes",
    },
    {
        data: "Pristine Dove Double Bedsheet Set- White",
        price: "RS 2,998 ",
        ruprs: "RS 6,999",
        rate: "(456)",
        off: "35% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Flinenwalas%2Fpristine-dove-single-bedsheet-set-white%2Fupdated%2FL-1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Carmen Bedside Table (Exotic Teak - Ice Beech)By Wooden Street",
        price: "RS 3,898 ",
        ruprs: "RS 5,999",
        rate: "(30)",
        off: "45% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbedside-tables-mdf%2Fcarmen-bedside-table%2Fexotic-teak-finish%2Fupdated%2F1-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Berlin Left Aligned Convertible Sofa Cum Bed with) ",
        price: "RS 56,898 ",
        ruprs: "RS 109,999",
        rate: "(2K)",
        off: "67% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fberlin-left-aligned-convertible-sofa-cum-bed-velvet%2Fleft-align%2FDark-olive-green%2F1-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Black Colour Individual Wall Photo Frames with Family and Mr Mrs Plaque - Set of 10 By Random",
        price: "RS 1,298 ",
        ruprs: "RS 1,899",
        rate: "(36)",
        off: "23% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Frandom%2Fblack-colour-individual-wall-photo-frames-with-family-and-mr-mrs-plaque-set-of-10%2Ffront-750x650.jpg",
        category: "photo",
    },
    {
        data: "Magnum Dressing Table (Exotic Teak-Frosty White)",
        price: "RS 16,898 ",
        ruprs: "RS 65,999",
        rate: "(15)",
        off: "45% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables-mdf%2Fcara-dressing-table%2Frevised%2FExotic+teak%2Fupdated%2Fupdated%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Green Printed Cotton 120 TC Double Bedsheet Sheet",
        price: "RS 1,200 ",
        ruprs: "RS 4,999",
        rate: "(70)",
        off: "47% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsalona-bichona%2Fgreen-printed-cotton-144-tc-double-bedsheet-set-with-two-pillow-covers%2Fupdated%2F1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Atury C Shape Table Lamp Shade Color Brown",
        price: "RS 3,898 ",
        ruprs: "RS 23,999",
        rate: "(43)",
        off: "76% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FSapphire%2Fatury-c-shape-table-lamp-shade-color-brown%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Doris Wooden Storage Box",
        price: "RS 18,898 ",
        ruprs: "RS 65,999",
        rate: "(58)",
        off: "68% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fjodhpur-products%2Fpooja-art-export%2FRBAC-313%2F1-750x650.png",
        category: "boxes",
    },
    {
        data: "Levent Engineered wood Dressing Table with Storag",
        price: "RS 9,898 ",
        ruprs: "RS 15,999",
        rate: "(63)",
        off: "13% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables%2Fallan-dressing-table%2Fwalnut%2Fupdated%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Ferguson Sheesham Wood Bed With Storage Drawers (King Size, Honey Finish)By Wooden Street",
        price: "RS 47,898 ",
        ruprs: "RS 73,999",
        rate: "(468)",
        off: "35% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fferguson-bed-with-storage%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "bades",
    },
    {
        data: "Voltz Premium Cotton Fabric Sofa Cum Bed (Indigo)",
        price: "RS 34,898 ",
        ruprs: "RS 59,999",
        rate: "(2.9K)",
        off: "38% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fvoltz-sofa-cum-bed%2Findigo-ink%2Fupdated%2Fupdated%2F1-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Lens Sconce Black Metal Wall Light",
        price: "RS 2,898 ",
        ruprs: "RS 3,999",
        rate: "(67)",
        off: "12% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Flamps-lighting%2Fwall-lamps%2Flens-sconce-black-iron-wall-light%2Fupdated%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Harvey Tv Unit (Flowery Wenge-Frosty White Finish)By Wooden Street",
        price: "RS 7,699 ",
        ruprs: "RS 14,999",
        rate: "(25)",
        off: "49% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Fharvey-tv-unit-revised%2Fflowery-wenge-revised%2Fwith-frosty%2Fupdated%2F1-750x650.jpg",
        category: "tvunits",
    },
    {
        data: "Set Of 31 Dark Brown Wall Photo Frames By ArtzFolio",
        price: "RS 2,298 ",
        ruprs: "RS 11,899",
        rate: "(101)",
        off: "73% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FARTFOLIO%2Fset-of-31-dark-brown-wall-photo-frames%2F1-750x650.jpg",
        category: "photo",
    },
    {
        data: "Patented Smart Grid Orthopedic Medium Firm Ma",
        price: "RS 11,898 ",
        ruprs: "RS 15,999",
        rate: "(54)",
        off: "25% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fthe-sleep-company%2Fpatented-smartgrid-orthopedic-mattress-6-inch-medium-firm-queen-size-mattress-for-extra-back-support-72-60-6%2F1-750x650.jpg",
        category: "Bedmantent",
    },
    {
        data: "Alcott 4 Door Wardrobe with Mirror (Exotic Teak-Frosty White Finish)By Wooden Street",
        price: "RS 32,299 ",
        ruprs: "RS 48,999",
        rate: "(10)",
        off: "32% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fwardrobes-mdf%2Falcott-4-door-wardrobe%2Fupdated%2Fexoctic-teak-white%2Fupdated%2F1-750x650.jpg",
        category: "Wardrobes",
    },
    {
        data: "Suzaan Fabric 3 Seater Foldable Sofa Cum Bed ",
        price: "RS 36,898 ",
        ruprs: "RS 99,999",
        rate: "(15)",
        off: "68% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fsuzaan-fabric-3-seater-foldable-sofa-cum-bed-velvet%2Fchestnut-brown%2F1-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Vintage Elegant Floral Leaves Full Length Mirror (X",
        price: "RS 6,898 ",
        ruprs: "RS 14,999",
        rate: "(43)",
        off: "12% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2F999+store%2Fmirrors%2Fvintage-elegant-floral-leaves-full-length-mirror%2Fxll%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Rafela Bedside Table By Wooden Street",
        price: "RS 16,898 ",
        ruprs: "RS 24,999",
        rate: "(20K)",
        off: "32% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbone-inlay%2Fbedside-table%2Frafela-bone-inlay-bedside-table%2Fupdated%2F1-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Black Set of 8 Individual Photo Frames With LOVE Plaque By Random",
        price: "RS 1,298 ",
        ruprs: "RS 1,899",
        rate: "(67)",
        off: "23% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Frandom%2Fblack-set-of-8-individual-photo-frames-with-love-plaque%2F1-750x650.jpg",
        category: "photo",
    },
    {
        data: "Pewter Finish Salcia Triple Silver Wall Light",
        price: "RS 2,998 ",
        ruprs: "RS 8,999",
        rate: "(47)",
        off: "17% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FDecor+de+Maison%2Fpewter-finish-salcia-triple-gold-wall-light%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "GetRest ProAdapt 8 -MultiZone Latex | 5-layere",
        price: "RS 31,898 ",
        ruprs: "RS 45,999",
        rate: "(1K)",
        off: "35% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FGetRest%2Fupdated-new-listing%2FProAdapt%2F1-750x650.jpg",
        category: "Bedmantent",
    },
    {
        data: "Boho Trunk Box (Walnut Finish)",
        price: "RS 19,898 ",
        ruprs: "RS 45,999",
        rate: "(69)",
        off: "47% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftrunk-blanket-boxes-ws%2Fboho-trunk-box%2Fupdated%2Fwalnut%2Fupdated%2F1-750x650.jpg",
        category: "boxes",
    },
    {
        data: "Howler Dressing Table (Honey Finish)",
        price: "RS 23,898 ",
        ruprs: "RS 56,999",
        rate: "(67)",
        off: "45% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fdressing-tables%2Fhowler-dressing-table%2Frevised%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Sereta Sheesham Wood Sofa Cum Bed (King Size) ",
        price: "RS 46,898 ",
        ruprs: "RS 79,999",
        rate: "(895)",
        off: "45% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Friota-sofa-cum-bed%2Frevised%2Frevised%2Fwalnut%2Fwalnut-finish%2F2-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Morse Sheesham Wood Bed with Drawer Storage (King Size, Honey Finish)By Wooden Street",
        price: "RS 49,898 ",
        ruprs: "RS 69,999",
        rate: "(257)",
        off: "28% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fwalken-bed-with-box-storage%2Fwalnut%2Fwalnut-finish%2F1-750x650.jpg",
        category: "bades",
    },
    {
        data: "Caden Engineered Wood Wall-Mounted Tv Unit with Open Shelves (Exotic Teak Frosty White)By Wooden Street",
        price: "RS 14,499 ",
        ruprs: "RS 26,999",
        rate: "(40)",
        off: "46% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Fcaden-tv-unit%2Fexotic-teak-frosty-white%2F1-750x650.jpg",
        category: "tvunits",
    },
    {
        data: "Blue and Beige Fashion Geometrical Print 210 TC ",
        price: "RS 1,800 ",
        ruprs: "RS 2,999",
        rate: "(84)",
        off: "38% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbedsheet-pillow%2Fblue-and-beige-fashion-geometrical-print-bedsheet-with-pillow-covers%2Fupdated%2F1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Bacon Divan Cum Bed with Mattress (King Size)",
        price: "RS 36,898 ",
        ruprs: "RS 59,999",
        rate: "(85)",
        off: "35% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fbacon-divan-cum-bed%2Frevised%2Fwalnut%2Fupdated%2F2-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Penguin Ortho-Memory Mattress (8 inch, Single, 78 x 36)8 Inch, 78 X 36 InchBy Penguin",
        price: "RS 9,898 ",
        ruprs: "RS 15,999",
        rate: "(853)",
        off: "39% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fmattress%2Fupdated%2Fultra-comfort-mattress%2Fupdated%2Fsingle%2F5-inch%2Fupdated%2F1-750x650.jpg",
        category: "Bedmantent",
    },
    {
        data: "Sinister Black Iron Picture Lights",
        price: "RS 6,998 ",
        ruprs: "RS 14,999",
        rate: "(48)",
        off: "17% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Fjainsons+Lights%2Fspun-brown-iron-picture-lights%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Paladin Trunk Box",
        price: "RS 15,898 ",
        ruprs: "RS 35,999",
        rate: "(78)",
        off: "59% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftrunk-blanket-boxes-ws%2Fpaladin-trunk-box%2Fupdated%2F1-750x650.jpg",
        category: "boxes",
    },
    {
        data: "Black Set of 15 Wall Photo Frames",
        price: "RS 1,498 ",
        ruprs: "RS 6,899",
        rate: "(443)",
        off: "77% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FARTFOLIO%2Fblack-set-of-15-wall-photo-frames%2F1-750x650.jpg",
        category: "photo",
    },
    {
        data: "Munich Bedside Table with Oriental Legs By Aakriti Art Creations",
        price: "RS 24,898 ",
        ruprs: "RS 34,999",
        rate: "(25)",
        off: "18% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Faakriti-art-creation%2Fmunich-bedside-table-with-oriental-legs%2Fupdated%2F11-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Aspen 2 Door Wardrobe with Mirror and Single Drawer (Flowery Wenge Finish)By Wooden Street",
        price: "RS 15,899 ",
        ruprs: "RS 33,999",
        rate: "(35)",
        off: "54% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fwardrobe%2Fadolph-medium-size-wardrobe-revised%2Frevised%2Fwalnut%2Fupdated%2F1-750x650.jpg",
        category: "Wardrobes",
    },
    {
        data: "Ferguson Sheesham Wood Hydraulic Bed With Storage (King Size, Honey Finish)By Wooden Street",
        price: "RS 58,898 ",
        ruprs: "RS 78,999",
        rate: "(243)",
        off: "25% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fferguson-hydraulic-bed-revised%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "bades",
    },
    {
        data: "Sleepyhead Original 3 Layered Medium Firm Orthopedic Memory Foam Mattress (6 inch, Single Size, 75 x 36) 6 Inch, 75 X 36 Inch By Sleepyhead ",
        price: "RS 8,800 ",
        ruprs: "RS 11,999",
        rate: "(942)",
        off: "28% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fmattress%2FSleepyhead+Mattress%2Fsleepyhead-original-3-layered-medium-firm-orthopedic-memory-foam-mattress-5-inch-king-size-72-72%2F1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Ava Bed Side Table with Solid Finish Space Saving with Storage  By Carbon14",
        price: "RS 3,198 ",
        ruprs: "RS 7,999",
        rate: "(30)",
        off: "60% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Frandom%2Fava-bed-side-table-with-solid-finish-space-saving-with-storage%2F1-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Square Steel Brown Picture Lights",
        price: "RS 5,998 ",
        ruprs: "RS 37,999",
        rate: "(94)",
        off: "47% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Flamps-lighting%2Fpicture-lights%2Fsquare-steel-white-picture-light%2Fupdated%2Fupdated%2F1-750x650.jpg",
        category: "lamps",
    },
    {
        data: "Kosmo Value Dressing Table (Natural Finish)",
        price: "RS 45,898 ",
        ruprs: "RS 43,999",
        rate: "(27)",
        off: "56% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fspacewood%2Fkosmo-value-walnut-rigato-dressing-table%2F1-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Celestin 4 Door Wardrobe with Dresser (Exotic Teak Frosty White)By Wooden Street",
        price: "RS 28,299 ",
        ruprs: "RS 48,999",
        rate: "(44)",
        off: "41% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fwardrobes-mdf%2Fcelestin-4-door-wardrobe-with-dresser%2Fexotic-teak-frosty-white%2F1-750x650.jpg",
        category: "Wardrobes",
    },
    {
        data: "Teal Blue Leaf Print Traditional Jaipuri Pure Cotton K",
        price: "RS 3,800 ",
        ruprs: "RS 10,999",
        rate: "(90T)",
        off: "67% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fjk+enterprises%2Fteal-blue-leaf-print-traditional-jaipuri-pure-cotton-king-size-bedsheet-with-pillow-covers%2Fupdated%2F1-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Venus Single Bed Bartha Single Bed With Box Storage (Honey Finish)By Wooden Street",
        price: "RS 17,898 ",
        ruprs: "RS 23,999",
        rate: "(60)",
        off: "25% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsingle-beds%2Fvenus-single-bed-revised%2Fupdated%2Fhoney%2F1-750x650.jpg",
        category: "bades",
    },
    {
        data: "Allan 1 Door Multi-Utility Wardrobe (Honey Finish)By Wooden Street",
        price: "RS 26,899 ",
        ruprs: "RS 39,999",
        rate: "(5)",
        off: "35% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fwardrobe%2Fallan-single-door-wardrobe%2Frevised%2Fhoney%2Fupdated%2F1-750x650.jpg",
        category: "Wardrobes",
    },
    {
        data: "Eleanor Bed Side Table with Solid Finish Space Saving with Storage By Carbon14",
        price: "RS 2,598 ",
        ruprs: "RS 5,999",
        rate: "(60)",
        off: "60% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Frandom%2Feleanor-bed-side-table-with-solid-finish-space-saving-with-storage%2F1-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Tessa Trunk Box",
        price: "RS 4,898 ",
        ruprs: "RS 15,999",
        rate: "(94)",
        off: "32% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fjodhpur-products%2Fastoria-trunk-box%2F1-750x650.jpg",
        category: "boxes",
    },
    {
        data: "Lynton Large Tv Unit with Two Pull Out Drawers and Shelves (Walnut Finish)By Wooden Street",
        price: "RS 19,499 ",
        ruprs: "RS 42,999",
        rate: "(133)",
        off: "55% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftv-units%2Flynton-large-tv-unit%2Frevised%2Fwalnut%2Fupdated%2F1-750x650.jpg",
        category: "tvunits",
    },
    {
        data: "Mirror With Silver Matte Aluminum Profile",
        price: "RS 6,898 ",
        ruprs: "RS 23,999",
        rate: "(43)",
        off: "76% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2FKK+Glass%2Fmirror-with-silver-matte-aluminum-profile%2Ffront-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Cambrey 3 Door Multi Utility Wardrobe (Walnut Finish)By Wooden Street",
        price: "RS 55,899 ",
        ruprs: "RS 99,999",
        rate: "(94)",
        off: "48% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fwardrobe%2Fcambrey-2-1-wardrobe%2Frevised%2Fwalnut%2Fupdated+new%2F1-750x650.jpg",
        category: "Wardrobes",
    },
    {
        data: "Fortune Engineered Wood Tv Unit with Open Storage (Flowery Wenge Finish)By Wooden Street",
        price: "RS 2,389 ",
        ruprs: "RS 3,999",
        rate: "(47)",
        off: "41% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Ffortune-tv-unit%2Fflowery-wenge-finish%2Fupdated%2F1-750x650.jpg",
        category: "tvunits",
    },
    {
        data: "Mendez Sofa Cum Bed With Box Storage (Exotic)",
        price: "RS 56,898 ",
        ruprs: "RS 98,999",
        rate: "(3.5K)",
        off: "58% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds-mdf%2Fmorena-sofa-cum-bed-with-box-storage%2Fexotic-teak%2Fupdated%2Fupdated%2F1-750x650.jpg",
        category: "sofa",
    },
    {
        data: "Penguin Ultra Comfort Mattress (6 inch, Single, 78 x 36) 6 Inch, 78 X 36 Inch By Penguin ",
        price: "RS 5,800 ",
        ruprs: "RS 11,999",
        rate: "(94)",
        off: "58% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fmattress%2FSleepyhead+Mattress%2FFlip+Done%2F4-750x650.jpg",
        category: "Bedsets",
    },
    {
        data: "Pablo Bed Side Table By Wooden Street",
        price: "RS 9,598 ",
        ruprs: "RS 14,999",
        rate: "(60)",
        off: "33% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fjodhpur-products%2Fdream-and-design%2Fpablo-bed-side-table%2F1-750x650.jpg",
        category: "Bedside",
    },
    {
        data: "Kosmo Alaska High Gloss White Dressing Table",
        price: "RS 17,898 ",
        ruprs: "RS 32,999",
        rate: "(43)",
        off: "67% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fspacewood%2Fkosmo-high-gloss-white-alaska-dressing-table%2F1-NEW-750x650.jpg",
        category: "dresingtable",
    },
    {
        data: "Cambrey 3 Door Multi Utility Wardrobe (Honey Finish)By Wooden Street",
        price: "RS 55,889 ",
        ruprs: "RS 99,999",
        rate: "(92)",
        off: "42% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Fwardrobe%2Fcambrey-2-1-wardrobe%2Frevised%2Fhoney%2Fupdated+new%2F1-750x650.jpg",
        category: "Wardrobes",
    },
    {
        data: "Shallow Tv Unit (Exotic Teak Finish)By Wooden Street",
        price: "RS 2,749 ",
        ruprs: "RS 6,999",
        rate: "(24)",
        off: "61% off ",
        image: "https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Fshallow-tv-unit%2Fexotic-teak-finish%2Fupdated%2F1-750x650.jpg",
        category: "tvunits",
    },
];
viewAllRecord();
function viewAllRecord() {
    let tbl = "";
    alldata.map((val) => {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none ">${val.category}</p>
            </div>
            </div>
            </div>
        
    `
    })

    document.getElementById('allrecord').innerHTML = tbl;
}  
function bedsdata() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "bades")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function tvunit() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "tvunits")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function wardbro() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "Wardrobes")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function bedside() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "Bedside")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function photo() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "photo")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function bedseet() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "Bedsets")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function mattress() {
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "Bedmantent")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function sofa(){   
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "sofa")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function blanketbox(){   
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "boxes")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function table(){   
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "dresingtable")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

function lamp(){   
   let tbl = "";
    alldata.forEach((val)=>{

    if(val.category == "lamps")
    {
        tbl += `
        <div class="col-md-4 pb-4">
            <div class="card">
                <img src="${val.image}" style="width:auto" class="card-img-top" alt="...">
                <div class="position-absolute">Best Seller</div>
                <div class="cards position-absolute">Add to cart</div>
                <div class="card-body">
                <h6 class="card-title text-left">${val.data}</h6>
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled d-flex mb-0 pb-1 ">
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><i class="fa-solid fa-star"></i></li> 
                    <li><p class="ps-1 mb-0">${val.rate}</p></li> 
                </ul>
                <div class="li list-unstyled"> <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-honey.jpg" alt="">
                    <img class="img" src="https://images.woodenstreet.de/image/data/fabric-options/sheesham-wood/sheesham-walnut.jpg" alt="">   
                </div>    
                </div>
                <p class="card-text m-0">${val.price}<s>${val.ruprs}</s> <big>${val.off}</big></p>
                <p class="card-text m-0 d-none">${val.category}</p>
            </div>
            </div>
            </div>
        
        `
    }
    
});
document.getElementById('allrecord').innerHTML = tbl;
}   

