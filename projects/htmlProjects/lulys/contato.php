<?php 

	@$nome 		= $_POST["nome"];
	@$email   	= $_POST["email"];
	@$mensagem  = $_POST["mensagem"];
	

	$link = mysqli_connect("127.0.0.1","root","","lulys");
	
	
	$sql = "INSERT INTO contato(nome, email, mensagem) 
			VALUES('$nome', '$email', '$mensagem')";
	
	$status = mysqli_query($link, $sql);
	
	
	mysqli_close($link);
	if($status==1)
		 header('Location: index.html');
	else if($status==0) 
			echo "Erro ao inserir!"; 

?>