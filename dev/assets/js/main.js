// Model
class GraphModel {
    constructor(matrix, startVertex, endVertex) {
      this.matrix = matrix; // Матрица смежности
      this.startVertex = startVertex - 1; // Преобразуем в индекс (0-based)
      this.endVertex = endVertex - 1; // Преобразуем в индекс (0-based)
    }
  
    // Алгоритм Дейкстры
    dijkstra() {
      const n = this.matrix.length;
      const distances = Array(n).fill(Infinity);
      const predecessors = Array(n).fill(null);
      const visited = Array(n).fill(false);
  
      distances[this.startVertex] = 0;
  
      for (let i = 0; i < n; i++) {
        // Находим необработанную вершину с минимальным расстоянием
        let minDist = Infinity;
        let u = -1;
        for (let j = 0; j < n; j++) {
          if (!visited[j] && distances[j] < minDist) {
            minDist = distances[j];
            u = j;
          }
        }
  
        if (u === -1) break; // Все вершины обработаны
        visited[u] = true;
  
        // Обновляем расстояния до соседей
        for (let v = 0; v < n; v++) {
          if (!visited[v] && this.matrix[u][v] !== 0) {
            const newDist = distances[u] + this.matrix[u][v];
            if (newDist < distances[v]) {
              distances[v] = newDist;
              predecessors[v] = u;
            }
          }
        }
  
        if (u === this.endVertex) break; // Достигли конечной вершины
      }
  
      // Восстанавливаем путь
      const path = [];
      let current = this.endVertex;
      while (current !== null) {
        path.unshift(current + 1); // Преобразуем обратно в 1-based
        current = predecessors[current];
      }
  
      return {
        path: path,
        distance: distances[this.endVertex]
      };
    }
  }
  
  // View
  class GraphView {
    displayResult(path, distance) {
      const resultElement = document.getElementById('result');
      if (path.length === 0 || distance === Infinity) {
        resultElement.textContent = 'Путь между вершинами не существует.';
      } else {
        resultElement.textContent = `Кратчайший путь: ${path.join(' → ')}\nДлина пути: ${distance}`;
      }
    }
  
    displayError(message) {
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Ошибка: ${message}`;
    }
  }
  
  // Controller
  class GraphController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.init();
    }
  
    init() {
      const solveButton = document.getElementById('solve-button');
      solveButton.addEventListener('click', () => this.handleSolve());
    }
  
    handleSolve() {
      const matrixInput = document.getElementById('matrix').value.trim();
      const startVertex = parseInt(document.getElementById('start-vertex').value);
      const endVertex = parseInt(document.getElementById('end-vertex').value);
  
      // Валидация
      const rows = matrixInput.split('\n').filter(row => row.trim() !== '');
      if (rows.length !== 5) {
        this.view.displayError('Матрица должна содержать ровно 5 строк.');
        return;
      }
  
      const matrix = [];
      for (let row of rows) {
        const digits = row.trim().split('').map(Number);
        if (digits.length !== 5 || digits.some(isNaN)) {
          this.view.displayError('Каждая строка должна содержать ровно 5 цифр.');
          return;
        }
        matrix.push(digits);
      }
  
      if (startVertex < 1 || startVertex > 5 || endVertex < 1 || endVertex > 5) {
        this.view.displayError('Вершины должны быть числами от 1 до 5.');
        return;
      }
  
      // Создаем модель и решаем задачу
      const model = new GraphModel(matrix, startVertex, endVertex);
      const { path, distance } = model.dijkstra();
      this.view.displayResult(path, distance);
    }
  }
  
  // Инициализация приложения
  document.addEventListener('DOMContentLoaded', () => {
    const model = new GraphModel([], 1, 3); // Заглушка, данные будут обновляться
    const view = new GraphView();
    const controller = new GraphController(model, view);
  });