const base = {
    get() {
        return {
            url : "http://localhost:8080/qichechuzu/",
            name: "qichechuzu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qichechuzu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "车辆出租管理系统"
        } 
    }
}
export default base
