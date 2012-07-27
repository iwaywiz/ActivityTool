define(function(require, exports, module) {
	
	/** 
	  * 依赖性 : 无
	  */
	    
	/** 关于编号命名规则的说明 
	  * 编号格式 : A_B_CC_DDD_EEEE
	  * 	A : 代表种类
	  *			C	Common		无特殊种类
	  *			T	Title		标题
	  *			I	Info		提示信息
	  *			W	Warn		警告信息
	  *			E	Error		错误信息
	  *			F	Confirm		确认信息
	  * 	B : 代表机能
	  *			C	Common		通用机能(即不针对机能)
	  *			P	People		人员处理机能
	  *			A	Activity	活动处理机能
	  *			R	Rechange	充值处理机能
	  *			S	System		系统处理机能
	  *			N	None		无法划分的机能
	  * 	CC : 备用(现在固定取00)
	  * 	DDD : 代表画面
	  *			000		不属于特定的画面
	  *			001		ActivityTool.html
	  *			002		peopleList.html
	  * 	EEEE : 代表连番(从0001开始)
	  */

	var Message = {
		// Title部分
		T_C_00_000_0001 : '错误',
		T_C_00_000_0002 : '确认',
		T_C_00_000_0003 : '输入',
		T_C_00_000_0004 : '系统错误',
		T_C_00_000_0005 : '处理结果',
		T_C_00_000_0006 : '邮件发送结果',
		T_C_00_000_0007 : '',
		
		// 通用提示信息
		I_C_00_000_0001 : '确实要删除如下记录吗?',
		I_C_00_000_0002 : '编号({0})的人员信息{1}成功!',
		I_C_00_000_0003 : '邮件发送成功!',
		I_C_00_000_0004 : '确实要恢复如下记录吗?',
		
		// Info部分
		// 充值相关的提示信息
		I_R_00_000_0001 : '请输入充值金额：',
		I_R_00_000_0002 : '以下人员充值成功!',
		I_R_00_000_0003 : '人员({0}:{1})充值({2})元成功!<br>目前余额：{3}元',
			
		// 活动相关的提示信息
		I_A_00_000_0001 : '活动信息创建成功!',
		I_A_00_000_0002 : '活动信息更新成功!',
		I_A_00_000_0003 : '活动名称({0})已经存在,是否用名称({1})进行保存?',
		I_A_00_000_0004 : '邮件发送成功!活动状态也保存成功!',
		I_A_00_000_0005 : '已经进行过{0}处理，是否要重新进行{0}?',
		I_A_00_000_0006 : '还没有进行{0}处理，是否直接进行{1}处理?',
		I_A_00_000_0007 : '您确认要取消此次活动吗?',
		I_A_00_000_0008 : '结算后此次活动的信息将不能修改。您确认要进行结算吗?',
		I_A_00_000_0009 : '此活动已经结算，是否要再次发信?',
		I_A_00_000_0010 : '此活动结算信息保存成功!',
		
		// Warn部分
		// 通用警告信息
		W_C_00_000_0001 : '请选择要{0}的记录!',
		W_C_00_000_0002 : '您当前选择了多条记录。您是否要对编号({0})的记录进行{1}?',
		
		// Error部分
		// 人员管理相关的错误信息
		E_P_00_000_0001 : '人员信息新建失败!',
		E_P_00_000_0002 : '人员信息更新失败!',
		E_P_00_000_0003 : '人员信息删除失败!',
		E_P_00_000_0004 : '该人员信息不存在,可能已经被删除!',
		E_P_00_000_0005 : '人员信息查询失败!',
		E_P_00_000_0006 : '取得人员列表信息失败!',
		E_P_00_000_0007 : '取得满足条件的数据数量失败!',
		E_P_00_000_0008 : '该人员ID已经存在!',
		E_P_00_000_0009 : '该人员ID已经存在，但是被逻辑删除，可以通过恢复人员功能进行恢复!',
		E_P_00_000_0010 : '该人员ID不存在!',
		E_P_00_000_0011 : '人员信息恢复失败!',

		// 充值相关的错误信息
		E_R_00_000_0001 : '充值操作失败!',
		
		// 通用错误信息
		E_C_00_000_0001 : '系统发生异常,请联系管理员，或者自己查看日志!',
		E_C_00_000_0002 : '邮件发送失败!',
		
		// 活动相关的错误信息
		E_A_00_000_0001 : '请选择要移除的人员!',
		E_A_00_000_0002 : '活动创建失败!',
		E_A_00_000_0003 : '活动更新失败!',
		E_A_00_000_0004 : '新建活动ID生成失败!',
		E_A_00_000_0005 : '取得活动列表信息失败!',
		E_A_00_000_0006 : '取得参加活动人员列表信息失败!',
		E_A_00_000_0007 : '活动名称自动生成失败!',
		E_A_00_000_0008 : '取得满足条件的活动数据数量失败!',
		E_A_00_000_0009 : '请输入活动费用!',
		E_A_00_000_0010 : '输入现金总额已经超出此次活动费用，请仔细确认!',
		E_A_00_000_0011 : '折扣信息输入错误，请仔细确认<br>(可能原因是折扣总和为0)'
	};
	
	return Message;
});