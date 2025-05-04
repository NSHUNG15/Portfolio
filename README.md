# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, dark mode support, and MongoDB integration for dynamic content management.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Sections for About, Skills, Projects, Experience, and Contact
- 📊 Dynamic skill progress bars
- 🗂️ Project filtering by technology
- ⌛ Interactive timeline for experience
- 📝 Contact form with validation
- 🔍 SEO optimized
- 🎭 MongoDB integration ready

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- MongoDB (ready for integration)

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## Project Structure

```
src/
├── components/     # React components
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── models/        # TypeScript interfaces
├── services/      # API services
└── styles/        # Global styles
```

## Customization

### Personal Information

Edit the following files to customize your information:

- `src/components/About.tsx` - About section content
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Skills.tsx` - Skills and expertise
- `src/components/Contact.tsx` - Contact information

### Styling

- Colors: Edit `tailwind.config.js` to customize the color scheme
- Typography: Update font imports in `index.html`
- Layout: Modify component styles using Tailwind classes

### MongoDB Integration

The project includes MongoDB models and service files ready for integration:

1. Set up your MongoDB database
2. Update connection settings in your environment variables
3. Implement the service functions in `src/services/api.ts`

## Features in Detail

### Dark Mode

- Automatic detection of system preference
- Manual toggle with persistent storage
- Smooth transition between modes

### Animations

- Intersection Observer-based reveal animations
- Smooth transitions for interactive elements
- Progress bar animations in Skills section

### Contact Form

- Client-side validation
- Ready for backend integration
- Success/error state handling

### Project Filtering

- Filter projects by technology
- Smooth transitions between filtered results
- Featured project highlighting

## Performance Optimization

- Lazy loading of images
- Component-level code splitting
- Optimized animations for better performance
- Minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [Lucide Icons](https://lucide.dev)
- [MongoDB](https://www.mongodb.com)

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)