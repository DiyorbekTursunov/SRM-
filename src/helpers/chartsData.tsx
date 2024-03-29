import { ApexOptions } from "apexcharts";

export const options1: ApexOptions | object = {
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        type: 'donut',
    },
    catigorys: [
        {
            id: 1,
            series: 40,
            label: "Front end"
        },
        {
            id: 2,
            series: 20,
            label: "Python"
        },
        {
            id: 3,
            series: 15,
            label: "Mobile"
        },
        {
            id: 4,
            series: 25,
            label: "3D modeling"
        }
    ],
    allValue:100,
    charttitle: "Jami o'quvchilar soni",
    series: [40, 20, 15, 25],
    colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
    labels: ['Front end', 'Python', 'Mobile', '3D modeling'],
    legend: {
        show: false,
        position: 'bottom',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};

export const options2: ApexOptions | object = {
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        type: 'donut',
    },
    catigorys: [
        {
            id: 1,
            series: 20,
            label: "Front end"
        },
        {
            id: 2,
            series: 40,
            label: "Python"
        },
        {
            id: 3,
            series: 25,
            label: "Mobile"
        },
        {
            id: 4,
            series: 15,
            label: "3D modeling"
        }
    ],
    allValue: 60,
    charttitle: "O'qimoqchi bo'lganlar soni",
    series: [20, 40, 25, 15],
    colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
    labels: ['Front end', 'Python', 'Mobile', '3D modeling'],
    legend: {
        show: false,
        position: 'bottom',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};


export const options3: ApexOptions | object = {
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        type: 'donut',
    },
    catigorys: [
        {
            id: 1,
            series: 20,
            label: "Qarzdorlar"
        },
        {
            id: 2,
            series: 100,
            label: "Jami o'quvchilar"
        },
    ],
    allValue: 20,
    charttitle: "Qarzdor o'quvchilar soni",
    series: [20, 80,],
    colors: ['#981B64', '#0FADCF'],
    labels: ['Qarzdorlar', "Jami o'quvchilar"],
    legend: {
        show: false,
        position: 'bottom',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};


export const options4: ApexOptions | object = {
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        type: 'donut',
    },
    catigorys: [
        {
            id: 1,
            series: "200 MLN UZS",
            label: "Jami summa"
        },
        {
            id: 2,
            series: "110 MLN UZS",
            label: "Harajatlar"
        },
        {
            id: 3,
            series: "80 MLN UZS",
            label: "Qoldi"
        },
    ],
    allValue:"200 MLN UZS",
    charttitle: "Jami summa",
    series: [200, 110, 80],
    colors: ['#6577F3', '#0FADCF', "#8FD0EF"],
    labels: ['Jami summa', "Harajatlar", "Qoldi"],
    legend: {
        show: false,
        position: 'bottom',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};

export const options5: ApexOptions | object = {
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        type: 'donut',
    },
    catigorys: [
        {
            id: 1,
            series: 7,
            label: "Qo'shnim"
        },
        {
            id: 2,
            series: 43,
            label: "Instagram orqali"
        },
        {
            id: 3,
            series: 30,
            label: "Telegram orqali"
        },
        {
            id: 3,
            series: 20,
            label: "Yaqind dostim"
        },
    ],
    allValue: 60,
    charttitle: "Tavfsiya qilinganlar soni",
    series: [200, 110, 80],
    colors: ['#6577F3', '#0FADCF', "#8FD0EF"],
    labels: ["Qo'shnim", "Instagram orqali", "Telegram orqali", "Yaqind dostim"],
    legend: {
        show: false,
        position: 'bottom',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};
