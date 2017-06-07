import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	timer: '',
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "1.你最喜欢吃的水果？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一章",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 1,
			"topic_id": 20,
			"answer_name": "苹果",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"topic_id": 20,
			"answer_name": "香蕉",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 3,
			"topic_id": 20,
			"answer_name": "桃子",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"topic_id": 20,
			"answer_name": "猕猴桃",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "2.你最喜欢的动物？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一章",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "小狗",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 6,
			"topic_id": 21,
			"answer_name": "小猫",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"topic_id": 21,
			"answer_name": "小猴",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"topic_id": 21,
			"answer_name": "小猪",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 22,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "3.你最喜欢的小说？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一章",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 22,
			"answer_name": "西游记",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 22,
			"answer_name": "红楼梦",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 22,
			"answer_name": "三国演义",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"topic_id": 22,
			"answer_name": "水浒传",
			"is_standard_answer": 0
		}]
	}],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})