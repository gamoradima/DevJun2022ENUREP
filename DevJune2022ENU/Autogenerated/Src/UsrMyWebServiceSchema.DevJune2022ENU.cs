﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrMyWebServiceSchema

	/// <exclude/>
	public class UsrMyWebServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrMyWebServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrMyWebServiceSchema(UsrMyWebServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("33cfcb90-46cc-4de2-b44f-8b0bce860f67");
			Name = "UsrMyWebService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5c3a0e26-5479-445e-a238-0ee14a150cbc");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,84,81,111,218,48,16,126,78,165,254,7,43,79,161,98,233,246,186,174,147,160,133,138,73,20,212,128,120,64,123,48,201,65,173,57,118,122,62,119,139,86,254,251,236,56,176,160,77,76,123,73,226,239,190,251,238,238,59,43,138,151,96,42,158,3,91,0,34,55,122,75,233,157,86,91,177,179,200,73,104,117,121,241,243,242,34,178,70,168,29,203,106,67,80,166,25,224,171,200,97,170,11,144,55,231,130,233,10,54,231,9,131,156,196,107,83,231,55,175,219,8,66,122,63,252,91,200,41,187,112,89,118,19,67,129,63,10,122,106,6,198,184,34,25,113,2,79,88,183,93,184,81,9,121,78,95,61,54,48,213,35,144,83,173,92,71,27,33,5,213,79,240,98,5,66,9,138,76,210,61,248,246,217,45,251,71,138,103,165,45,80,244,124,145,202,110,164,200,89,46,185,49,236,9,184,164,186,109,133,125,100,67,110,160,61,245,217,196,69,139,153,146,117,183,119,167,224,215,17,173,103,21,132,253,116,39,136,214,110,214,137,122,213,223,32,153,2,61,235,194,181,24,207,103,217,34,238,179,235,171,37,138,5,148,149,116,58,30,191,227,50,207,108,25,247,175,174,25,27,234,162,206,168,150,62,226,68,166,174,38,223,193,17,77,87,200,171,10,138,190,175,18,249,137,192,208,88,99,201,233,36,33,64,233,23,163,85,223,141,103,42,173,12,156,231,121,91,188,106,235,76,1,185,40,185,100,15,64,11,77,92,14,74,109,21,13,235,69,93,193,164,72,12,161,95,45,54,206,5,172,207,78,192,217,118,11,24,34,61,175,219,248,21,137,45,107,115,211,137,121,180,82,206,112,84,86,84,39,93,165,30,123,123,99,103,88,93,233,70,187,21,143,16,200,162,98,239,62,220,52,231,125,243,60,76,130,96,172,244,227,191,15,209,12,36,228,196,76,120,221,50,5,223,89,192,146,165,1,116,11,85,238,219,173,54,148,136,220,61,151,182,84,201,216,170,60,117,11,75,226,165,193,57,186,75,178,204,238,227,222,129,53,70,29,66,225,86,197,7,124,245,12,8,77,32,116,30,247,220,108,163,23,203,101,18,132,211,57,71,247,23,32,192,196,183,242,96,69,113,234,202,177,196,64,21,141,80,199,135,255,80,59,113,175,149,228,166,29,61,88,115,180,42,152,147,142,126,64,110,9,178,156,75,142,159,90,67,63,39,189,3,187,113,61,36,53,144,55,126,239,175,211,254,23,87,190,255,115,216,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("33cfcb90-46cc-4de2-b44f-8b0bce860f67"));
		}

		#endregion

	}

	#endregion

}
