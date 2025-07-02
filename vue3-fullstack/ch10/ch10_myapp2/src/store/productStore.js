import {defineStore} from "pinia";

export const useProductStore = defineStore(
        'product',
        {
            state: () => ({
                dataList: [], currentData: null,
            }),
            actions: { // 자료실 목록 가져오기
                async fetchDataList() {
                    try {
                        const response = await fetch('http://localhost:8081/dataroom/list');
                        if (!response.ok)
                            throw new Error('Failed to fetch data list');
                        const data = await response.json();
                        this.dataList = data;
                    } catch (e) {
                        console.error('Error fetching data list...', e);
                    }
                },
                async fetchDataDetail(dno) { // 특정 자료글 상세 정보 가져오기
                    try {
                        const response = await fetch(`http://localhost:8081/dataroom/detail/${dno}`);
                        if (!response.ok)
                            throw new Error('Failed to fetch data detail');
                        const data = await response.json();
                        this.currentData = data;
                    } catch (e) {
                        console.error('Error fetching data detail...', e);
                    }
                },
                async insertData(formData) { // 자료 등록하기
                    try {
                        const response = await fetch(`http://localhost:8081/dataroom/insert`,
                            {
                                method: 'POST',
                                body: formData,
                            });
                        if (!response.ok)
                            throw new Error('Failed to insert data');
                        const newData = await response.json();
                        this.dataList.push(newData);
                    } catch (e) {
                        console.error('Error insert data...', e);
                    }
                },
                async updateData(dno, formData) { // 자료 수정하기
                    try {
                        const response = await fetch(`http://localhost:8081/dataroom/update/${dno}`,
                            {
                                method: 'PUT',
                                body: formData,
                            });
                        if (!response.ok)
                            throw new Error('Failed to update data');
                        const updatedData = await response.json();
                        const index = this.dataList.findIndex((data) => data.no === updatedData.dno);
                        if (index !== -1) {
                            this.dataList.slice(index, 1, updatedData);
                        }
                        this.dataList.push(updatedData);
                    } catch (e) {
                        console.error('Error update data...', e);
                    }
                },
                async deleteData(dno) { // 자료 삭제하기
                    try {
                        const response = await fetch(`http://localhost:8081/dataroom/delete/${dno}`,
                            {
                                method: 'DELETE',
                            });
                        if (!response.ok)
                            throw new Error('Failed to delete data');
                        this.dataList = this.dataList.filter((data) => data.dno !== dno);
                    } catch (e) {
                        console.error('Error delete data...', e);
                    }
                },
            },
        },
    )
;