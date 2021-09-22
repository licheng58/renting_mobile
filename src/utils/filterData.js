const body = {
  area: [
    {
      label: '北京',
      value: '01',
      children: [
        {
          label: '东城区',
          value: '01-1'
        },
        {
          label: '西城区',
          value: '01-2'
        },
        {
          label: '崇文区',
          value: '01-3'
        },
        {
          label: '宣武区',
          value: '01-4'
        }
      ]
    },
    {
      label: '浙江',
      value: '02',
      children: [
        {
          label: '杭州',
          value: '02-1',
          children: [
            {
              label: '西湖区',
              value: '02-1-1'
            },
            {
              label: '上城区',
              value: '02-1-2'
            },
            {
              label: '江干区',
              value: '02-1-3'
            },
            {
              label: '下城区',
              value: '02-1-4'
            }
          ]
        },
        {
          label: '宁波',
          value: '02-2',
          children: [
            {
              label: 'xx区',
              value: '02-2-1'
            },
            {
              label: 'yy区',
              value: '02-2-2'
            }
          ]
        },
        {
          label: '温州',
          value: '02-3'
        },
        {
          label: '嘉兴',
          value: '02-4'
        },
        {
          label: '湖州',
          value: '02-5'
        },
        {
          label: '绍兴',
          value: '02-6'
        }
      ]
    }
  ],

  characteristic: [
    {
      label: '亮点1',
      value: '1'
    },
    {
      label: '亮点2',
      value: '2'
    },
    {
      label: '亮点3',
      value: '3'
    },
    {
      label: '亮点4',
      value: '4'
    }
  ],

  floor: [
    {
      label: '高楼层',
      value: '1'
    },
    {
      label: '中楼层',
      value: '2'
    },
    {
      label: '低楼层',
      value: '3'
    }
  ],

  mode: [
    {
      label: '整租',
      value: '1'
    },
    {
      label: '合租',
      value: '2'
    }
  ],

  oriented: [
    {
      label: '东',
      value: '1'
    },
    {
      label: '南',
      value: '2'
    },
    {
      label: '西',
      value: '3'
    },
    {
      label: '北',
      value: '4'
    }
  ],

  price: [
    {
      label: '1000-',
      value: '1'
    },
    {
      label: '1000-2000',
      value: '2'
    },
    {
      label: '2000-4000',
      value: '3'
    },
    {
      label: '4000+',
      value: '4'
    }
  ],

  roomType: [
    {
      label: '一室',
      value: '1'
    },
    {
      label: '二室',
      value: '2'
    },
    {
      label: '三室',
      value: '3'
    },
    {
      label: '四室',
      value: '4'
    }
  ],

  subway: [
    {
      label: '1号线',
      value: '1'
    },
    {
      label: '2号线',
      value: '2'
    },
    {
      label: '3号线',
      value: '3'
    },
    {
      label: '4号线',
      value: '4'
    }
  ]
}

export default body
