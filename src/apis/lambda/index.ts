/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */

export async function getDetail() {
  return {
    basic: [
      {
        key: 'task',
        label: '任务标题',
        value: '集盒家居旗舰店双十一活动'
      },
      {
        key: 'shop',
        label: '店铺名称',
        value: '集盒家居旗舰店'
      },
      {
        key: 'amount',
        label: '任务金额',
        value: '1000.00'
      },
      {
        key: 'reward',
        label: '任务赏金',
        value: '200.00'
      },
      {
        key: 'ordertime',
        label: '接单时间',
        value: '2017-10-18 12:20:07'
      },
      {
        key: 'deliverytime',
        label: '交付时间',
        value: '2017-10-18 12:20:07'
      }
    ],
    more: [
      {
        key: 'phone',
        label: '联系方式',
        value: '138xxxx9876'
      },
      {
        key: 'address',
        label: '收货地址',
        value: '杭州市文一西路'
      },
      {
        key: 'status',
        label: '任务状态',
        value: '进行中'
      },
      {
        key: 'remark',
        label: '备注',
        value: '暂无'
      }
    ]
  };
}
export async function getList() {
  return {
    list: Array.from({ length: 10 }).map((item, index) => {
      return {
        id: `00000${index}`,
        name: '聘用合同',
        ourCompany: 'xxx商铺',
        amount: '999,999',
        currency: 'CNY',
        state: '签约中'
      };
    })
  };
}

export async function sendMessage(message: string, i: number) {
  return {
    answer: `Your message is ${message}-${i}`,
    method: 'post'
  };
}
