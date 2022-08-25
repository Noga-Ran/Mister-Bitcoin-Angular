export class ChartModel {

    constructor(
        public title: string = '',
        public type: string = 'AreaChart',
        public data: Array<Array<any>> = [[]],
        public columnNames: Array<string> = ['Month', 'Rate'],
        public options: any =
            {
                curveType: 'function',
                legend: { position: 'bottom', textStyle: { color: '#151515' } },
                backgroundColor: '',
                chartArea: { width: "75%", height: "70%",backgroundColor:'black' },
                colors: ['#ffd471'],
                hAxis: { textStyle: { color: '#151515' } },
                vAxis: { textStyle: { color: '#151515' } },
                titleTextStyle: { color: '#ffd471',fontSize:'24' },
                is3D:true
            },
    ) { }
}