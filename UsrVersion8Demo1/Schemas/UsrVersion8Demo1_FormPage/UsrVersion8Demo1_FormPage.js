define("UsrVersion8Demo1_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ControlGroupContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName"
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_mvwda3s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"control": "$StringAttribute_imrf97s",
					"label": "$Resources.Strings.StringAttribute_imrf97s",
					"labelPosition": "auto"
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_k1cxqpp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 3
					},
					"type": "crt.Input",
					"control": "$StringAttribute_imrf97s",
					"label": "$Resources.Strings.StringAttribute_imrf97s",
					"labelPosition": "auto"
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_4dxiyp9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"rowSpan": 5,
						"row": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ControlGroupContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_vtnw8s9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"control": "$NumberAttribute_f1uddmd",
					"label": "$Resources.Strings.NumberAttribute_f1uddmd",
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_4dxiyp9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_jxxsvuo",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"control": "$NumberAttribute_pehzu36",
					"label": "$Resources.Strings.NumberAttribute_pehzu36",
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_4dxiyp9",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"StringAttribute_imrf97s": {
					"modelConfig": {
						"path": "PDS.UsrColumn2"
					}
				},
				"NumberAttribute_pehzu36": {
					"modelConfig": {
						"path": "PDS.UsrColumn3"
					}
				},
				"NumberAttribute_f1uddmd": {
					"modelConfig": {
						"path": "PDS.UsrColumn4"
					}
				},
				"BooleanAttribute_8lvoutf": {
					"modelConfig": {
						"path": "PDS.UsrColumn5"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrVersion8Demo1"
					},
					"scope": "page"
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});