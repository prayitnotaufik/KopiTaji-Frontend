const TopsisData = [
    {id: 0, Alternatif: 'Karung 1', C1: '20%', C2: '15%', C3: 'Agak Berbau', C4: 'Banyak'},
    {id: 1, Alternatif: 'Karung 1', C1: '20%', C2: '15%', C3: 'Agak Berbau', C4: 'Banyak'},
    {id: 2, Alternatif: 'Karung 1', C1: '20%', C2: '15%', C3: 'Agak Berbau', C4: 'Banyak'},
    {id: 3, Alternatif: 'Karung 1', C1: '20%', C2: '15%', C3: 'Agak Berbau', C4: 'Banyak'}
  ];

const Normalisasi = [
    {id: 0, Alternatif: 'Karung 1', C1: '2', C2: '3', C3: '4', C4: '3' },
    {id: 1, Alternatif: 'Karung 1', C1: '2', C2: '3', C3: '4', C4: '3' },
    {id: 2, Alternatif: 'Karung 1', C1: '2', C2: '3', C3: '4', C4: '3' },
    {id: 3, Alternatif: 'Karung 1', C1: '2', C2: '3', C3: '4', C4: '3' }
];

const NormalisasiBobot = [
    {id: 0, Alternatif: 'Karung 1', C1: '12,21', C2: '13,22', C3: '14,89', C4: '13,22' },
    {id: 1, Alternatif: 'Karung 1', C1: '12,21', C2: '13,22', C3: '14,89', C4: '13,22' },
    {id: 2, Alternatif: 'Karung 1', C1: '12,21', C2: '13,22', C3: '14,89', C4: '13,22' },
    {id: 3, Alternatif: 'Karung 1', C1: '12,21', C2: '13,22', C3: '14,89', C4: '13,22' }
]

const Ideal = [
    {id: 0, C1: '12,21', C2: '13,22', C3: '14,89', C4: '13,22' },
]

const JarakAlternatif = [
    {id:0, Alternatif: 'Karung 1', Jarak: '12,89'},
    {id:1, Alternatif: 'Karung 1', Jarak: '12,89'},
    {id:2, Alternatif: 'Karung 1', Jarak: '12,89'},
    {id:3, Alternatif: 'Karung 1', Jarak: '12,89'},
]

const hasilAkhir = [
    {id:0, Alternatif: 'Karung 1', Skor: '3,221', Rank: '1'},
    {id:1, Alternatif: 'Karung 1', Skor: '3,221', Rank: '1'},
    {id:2, Alternatif: 'Karung 1', Skor: '3,221', Rank: '1'},
    {id:3, Alternatif: 'Karung 1', Skor: '3,221', Rank: '1'},
]
  
  export  { TopsisData,Normalisasi,NormalisasiBobot,Ideal,JarakAlternatif,hasilAkhir };