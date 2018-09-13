import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig, TreeItem } from 'ngx-treeview';

import { AhanaService } from '../../../../services/ahana.service';

@Component({
	selector: 'app-role-rights',
	templateUrl: './role-rights.component.html',
	styleUrls: ['./role-rights.component.scss']
})
export class RoleRightsComponent implements OnInit {

	constructor(private ahanaService: AhanaService) { }

	items: any = [];
	config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: false,
        hasCollapseExpand: true,
        decoupleChildFromParent: false,
        maxHeight: 150000
    });

	ngOnInit() {
        this.goInit();
        var childrenCategory = new TreeviewItem({
            text: 'Children', value: 1, collapsed: true, children: [
                { text: 'Baby 3-5', value: 11,children: [
                { text: 'Baby 3-5', value: 11 },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ] },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ]
        });
        var itCategory = new TreeviewItem({
            text: 'IT', value: 9, children: [
                {
                    text: 'Programming', value: 91, children: [{
                        text: 'Frontend', value: 911, children: [
                            { text: 'Angular 1', value: 9111 },
                            { text: 'Angular 2', value: 9112 },
                            { text: 'ReactJS', value: 9113, disabled: true },{
                        text: 'Frontend', value: 911, children: [
                            { text: 'Angular 1', value: 9111 },
                            { text: 'Angular 2', value: 9112 },
                            { text: 'ReactJS', value: 9113, disabled: true }
                        ]
                    }, {
                        text: 'Backend', value: 912, children: [
                            { text: 'C#', value: 9121 },
                            { text: 'Java', value: 9122 },
                            { text: 'Python', value: 9123, checked: false, disabled: true }
                        ]
                    },{
                        text: 'Frontend', value: 911, children: [
                            { text: 'Angular 1', value: 9111 },
                            { text: 'Angular 2', value: 9112 },
                            { text: 'ReactJS', value: 9113, disabled: true }
                        ]
                    }, {
                        text: 'Backend', value: 912, children: [
                            { text: 'C#', value: 9121 },
                            { text: 'Java', value: 9122 },
                            { text: 'Python', value: 9123, checked: false, disabled: true }
                        ]
                    }
                        ]
                    }, {
                        text: 'Backend', value: 912, children: [
                            { text: 'C#', value: 9121 },
                            { text: 'Java', value: 9122 },
                            { text: 'Python', value: 9123, checked: false, disabled: true }
                        ]
                    }]
                },
                {
                    text: 'Networking', value: 92, children: [
                        { text: 'Internet', value: 921,children: [
                { text: 'Baby 3-5', value: 11 },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ] },
                        { text: 'Security', value: 922 }
                    ]
                }
            ]
        });
        var teenCategory = new TreeviewItem({
            text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
                { text: 'Adventure', value: 21,children: [
                { text: 'Baby 3-5', value: 11 },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ] },
                { text: 'Science', value: 22 }
            ]
        });
        var othersCategory = new TreeviewItem({ text: 'Others', value: 3, checked: false, disabled: true });
		// this.items = [itCategory, childrenCategory, itCategory, teenCategory, itCategory, othersCategory, itCategory, childrenCategory, itCategory, teenCategory, itCategory, othersCategory, itCategory, childrenCategory, itCategory, teenCategory, itCategory, othersCategory, itCategory]
	}

    goInit () {
        var accessToken = localStorage.getItem('access_token');
        var self = this;
        this.ahanaService.getRoleRights(accessToken).subscribe((roleRights: any) => {
            // console.log(roleRights);
            if (roleRights.success && roleRights.modules && roleRights.modules.length) {
                for (var i = 0; i < roleRights.modules.length; ++i) {
                    var curItem: TreeItem = {text:'', value: ''};
                    curItem['text'] = roleRights.modules[i].label;
                    curItem['value'] = roleRights.modules[i].value;
                    curItem['checked'] = false;
                    if (roleRights.modules[i].children && roleRights.modules[i].children.length) {
                        curItem['children'] = [];
                        for (var j = 0; j < roleRights.modules[i].children.length; j++) {
                            curItem['children'][j] = {text:'', value: ''};
                            curItem['children'][j]['text'] = roleRights.modules[i].children[j]['label'];
                            curItem['children'][j]['value'] = roleRights.modules[i].children[j]['value'];
                            curItem['children'][j]['checked'] = false;
                            if (roleRights.modules[i].children[j].children && roleRights.modules[i].children[j].children.length) {
                                curItem['children'][j]['children'] = [];
                                for (var k = 0; k < roleRights.modules[i].children[j].children.length; k++) {
                                    curItem['children'][j]['children'][k] = {text:'', value: ''};
                                    curItem['children'][j]['children'][k]['text'] = roleRights.modules[i].children[j].children[k]['label']
                                    curItem['children'][j]['children'][k]['value'] = roleRights.modules[i].children[j].children[k]['value']
                                    curItem['children'][j]['children'][k]['checked'] = false;
                                    if (roleRights.modules[i].children[j].children[k].children && roleRights.modules[i].children[j].children[k].children.length) {
                                        curItem['children'][j]['children'][k]['children'] = [];
                                        for (var l = 0; l < roleRights.modules[i].children[j].children[k].children.length; l++) {
                                            curItem['children'][j]['children'][k]['children'][l] = {text:'', value: ''};
                                            curItem['children'][j]['children'][k]['children'][l]['text'] = roleRights.modules[i].children[j].children[k].children[l]['label']
                                            curItem['children'][j]['children'][k]['children'][l]['value'] = roleRights.modules[i].children[j].children[k].children[l]['value']
                                            curItem['children'][j]['children'][k]['children'][l]['checked'] = false;
                                            if (l == roleRights.modules[i].children[j].children[k].children.length - 1) {
                                                self.items.push(new TreeviewItem(curItem))
                                                console.log(curItem)
                                            }
                                        }
                                    } else {
                                        if (k == roleRights.modules[i].children[j].children.length - 1) {
                                            self.items.push(new TreeviewItem(curItem))
                                                console.log(curItem)
                                        }
                                    }
                                }
                            } else {
                                if (j == roleRights.modules[i].children.length - 1) {
                                    self.items.push(new TreeviewItem(curItem))
                                                console.log(curItem)
                                }
                            }
                        }
                    } else {
                        self.items.push(new TreeviewItem(curItem))
                                                console.log(curItem)
                    }
                }
            }

            setTimeout(function () {
                console.log(self.items)
            }, 1000)
        })
    }

	onSelectedChange (e) {}

}
