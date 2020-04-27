export default function map (id) {
    var res = [];
    for (j = 0; j < data[n].length; j++) {
        res.push({
            name: province[j],
            value: data[n][j]
        });
    }
    res.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6);
    
    res.sort(function(a, b) {
        return a.value - b.value;
    });
    var res1 = [];
    var res2 = [];
    for (t = 0; t < 10; t++) {
        res1[t] = res[res.length - 1 - t].name;
        res2[t] = res[res.length - 1 - t].value;
    }
    console.log(res1);
    console.log("----------------");
    console.log(province);
    option.options.push({
        title: [{
                text: days[n] + "日  " + news[n],
                textStyle: {
                    color: '#2D3E53',
                    fontSize: 28
                },
                left: 20,
                top: 20,
            },
            {
                show: true,
                text: '感染人数前十的省份',
                textStyle: {
                    color: '#2D3E53',
                    fontSize: 18
                },
                right: '10%',
                top: '15%'
            }
        ],
        yAxis: {
            data: res1,
        },
        series: [{
            type: 'map',
            data: res
        }, {
            type: 'bar',
            data: res2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#FF0000' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#990000' // 100% 处的颜色
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00C0FA' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2F95FA' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                }
            },
        }]
    });
    }
 

