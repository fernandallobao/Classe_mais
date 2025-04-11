# 👩‍🏫 Classe+ - Recomendação de Monitores com K-Means

Este projeto tem como objetivo identificar alunos com facilidade em determinadas matérias e aqueles com dificuldade, sugerindo **pares ideais** entre eles para formar **monitorias colaborativas**, com base em agrupamentos (clusters) de perfis semelhantes.

---

## 🧠 Tecnologias e Bibliotecas Usadas

- Python 🐍
- Pandas
- NumPy
- Scikit-learn (KMeans, métricas de avaliação)
- Matplotlib & Seaborn (visualização)
- Google Cloud Platform (GCP) para importação de dados

---

## 📊 Metodologia

Utilizamos o algoritmo de **K-Means Clustering** para agrupar os alunos de acordo com variáveis como:

- Idade
- Ano escolar
- Preferência de aprendizado
- Horário de estudo
- Estilo e frequência de estudo
- Matérias que gosta
- Matérias com dificuldade

Esses dados são transformados em formato numérico e binário para que o algoritmo consiga calcular a similaridade entre os alunos.

---

## 💡 Como Funciona

1. Os dados são carregados e tratados (normalização, codificação, binarização de matérias).
2. Aplicamos o K-Means para formar grupos de alunos com perfis semelhantes.
3. Dentro de cada grupo, identificamos:
   - Quem gosta de determinada matéria (**potenciais monitores**);
   - Quem tem dificuldade nela (**alunos aprendizes**).
4. Formamos os pares com base nessas informações, garantindo que o monitor seja do mesmo grupo do aprendiz e tenha afinidade com a matéria.

---

## 📈 Avaliação dos Clusters

Usamos três métricas para validar a qualidade dos agrupamentos:

- **Silhouette Score**
- **Índice Davies-Bouldin**
- **Índice Calinski-Harabasz**

Também utilizamos PCA para reduzir a dimensionalidade e visualizar os grupos.

---

## 🔁 Exemplo de Saída

```text
Monitor: Ana, Aprendiz: João, Matéria: matemática, Ano: 7
Monitor: Pedro, Aprendiz: Luiza, Matéria: história, Ano: 6
...
```
---
### 👩‍💻 Quem fez este projeto

- Brenda Moura [🔗](http://linkedin.com/in/brendamoura)
- Caroline Roberta [🔗](https://www.linkedin.com/in/SEU-USUÁRIO)
- Fernanda Lobão [🔗](www.linkedin.com/in/fernanda-lobao-developer)
- Rayane Mota [🔗](http://linkedin.com/in/raymotta)
- Renata Medeiros [🔗](https://www.linkedin.com/in/SEU-USUÁRIO)
- Suellen Cristina [🔗](https://www.linkedin.com/in/suellencris/)
