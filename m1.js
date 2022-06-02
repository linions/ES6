// 分块引入

// export let school = '尚硅谷';
// export function teach() {
//     console.log('我能教你开发技巧');
// }

// 整体引入
// let school = '尚硅谷';
// function teach() {
//     console.log('我能教你开发技巧');
// }

// export { school, teach };

// 默认暴露
export default {
    school: '尚硅谷',
    change: function () {
        console.log('我们可以改变你！');
    }
}