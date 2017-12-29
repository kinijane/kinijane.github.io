// �N�b�L�[�ۑ��@setCookie(�N�b�L�[��, �N�b�L�[�̒l, �N�b�L�[�̗L������); //
function setCookie(c_name,value,expiredays){
    // path�̎w��
    var path = location.pathname;
    // path���t�H���_���Ɏw�肷��ꍇ��IE�΍�
    var paths = new Array();
    paths = path.split("/");
    if(paths[paths.length-1] != ""){
        paths[paths.length-1] = "";
        path = paths.join("/");
    }
    // �L�������̓��t
    var extime = new Date().getTime();
    var cltime = new Date(extime + (60*60*1000*expiredays));
    var exdate = cltime.toUTCString();
    // �N�b�L�[�ɕۑ����镶����𐶐�
    var s="";
    s += c_name +"="+ escape(value);// �l�̓G���R�[�h���Ă���
    s += "; path="+ path;
    if(expiredays){
        s += "; expires=" +exdate+"; ";
    }else{
        s += "; ";
    }
    // �N�b�L�[�ɕۑ�
    document.cookie=s;
}

// �N�b�L�[�̒l���擾 getCookie(�N�b�L�[��); //
function getCookie(c_name){
    var st="";
    var ed="";
    if(document.cookie.length>0){
        // �N�b�L�[�̒l�����o��
        st=document.cookie.indexOf(c_name + "=");
        if(st!=-1){
            st=st+c_name.length+1;
            ed=document.cookie.indexOf(";",st);
            if(ed==-1) ed=document.cookie.length;
            // �l���f�R�[�h���ĕԂ�
            return unescape(document.cookie.substring(st,ed));
        }
    }
    return "";
}


