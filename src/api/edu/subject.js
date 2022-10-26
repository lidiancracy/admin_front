import request from '@/utils/request'
export default {
    //1 课程分类列表
    getSubjectList() {
        return request({
            url: '/eduservice/excel/getAllSubject',
            method: 'get'
          })
    }
}
