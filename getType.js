// getType function은 다양한 js 파일에서 사용될 수 있다.
// 그렇기에 getType을 밖으로 내보내게끔 하여 쉽게 사용하게 한다.
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
};