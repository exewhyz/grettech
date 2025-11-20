# GretTech Sanity Data Import# Sanity Portfolio Dummy Data



This folder contains NDJSON files for importing initial data into your Sanity Studio for the GretTech website.This folder contains comprehensive dummy data for your Sanity portfolio database. The data is structured in NDJSON (Newline Delimited JSON) format, which is the standard format for Sanity data imports.



## Files Overview## 📦 What's Included



- `company.ndjson` - Company information (singleton)The following data files are available for import:

- `hero.ndjson` - Hero section content (singleton)

- `contact.ndjson` - Contact information (singleton)| File | Description | Records |

- `social.ndjson` - Social media links (5 items)|------|-------------|---------|

- `icon.ndjson` - Icon references for services and values (9 items)| `profile.ndjson` | Main profile information | 1 profile |

- `servicesSection.ndjson` - Services section with all service items (singleton)| `profile-with-animation.ndjson` | Profile with animated headline feature | 1 profile |

- `about.ndjson` - About section with mission, vision, and values (singleton)| `skills.ndjson` | Technical skills and proficiencies | 15 skills |

- `processStep.ndjson` - Process steps for workflow (4 items)| `experience.ndjson` | Work experience history | 4 positions |

- `project.ndjson` - Portfolio projects (9 items)| `education.ndjson` | Educational background | 2 degrees |

- `testimonial.ndjson` - Customer testimonials (4 items)| `projects.ndjson` | Portfolio projects | 6 projects |

- `import-all.sh` - Shell script for Unix/Mac import| `blog.ndjson` | Blog posts | 6 articles |

- `import-all.bat` - Batch script for Windows import| `services.ndjson` | Services offered | 5 services |

| `achievements.ndjson` | Awards and achievements | 7 achievements |

## Prerequisites| `certifications.ndjson` | Professional certifications | 5 certifications |

| `testimonials.ndjson` | Client testimonials | 6 testimonials |

1. Install Sanity CLI globally:| `siteSettings.ndjson` | Site configuration | 1 settings document |

   ```bash| `contact.ndjson` | Sample contact submissions | 3 contacts |

   npm install -g @sanity/cli

   ```**Total: 61 sample documents** ready to populate your portfolio!



2. Authenticate with Sanity:## ⚠️ Important: Singleton Documents

   ```bash

   sanity loginTwo documents are configured as **singletons** (only one instance allowed):

   ```- **Profile** - Uses ID: `singleton-profile`

- **Site Settings** - Uses ID: `singleton-siteSettings`

3. Make sure you have your Sanity project set up and configured in `sanity.config.ts`

These IDs match your `structure.ts` configuration and allow proper singleton behavior in Sanity Studio.

## How to Import

## 🚀 Quick Start - Import All Data

### Option 1: Using the Import Scripts (Recommended)

### Prerequisites

**For Mac/Linux:**

```bashBefore importing, ensure you have:

cd Data

chmod +x import-all.sh1. ✅ Sanity CLI installed globally (if not, run: `npm install -g @sanity/cli`)

./import-all.sh2. ✅ Your environment variables set up (`.env` or `.env.local` file)

```3. ✅ Your Sanity project is initialized and accessible



Or specify a different dataset:### Environment Variables

```bash

./import-all.sh developmentMake sure these variables are set in your `.env.local` file:

```

```env

**For Windows:**NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id

```bashNEXT_PUBLIC_SANITY_DATASET=production

cd Data```

import-all.bat

```### Method 1: Import All Data at Once (Recommended)



Or specify a different dataset:Import all data files in the correct order to handle references properly:

```bash

import-all.bat development```bash

```# Navigate to the Data folder

cd Data

### Option 2: Manual Import

# Import in order (skills first, then items that reference them)

Import files individually using the Sanity CLI from the Data directory:sanity dataset import skills.ndjson production --replace

sanity dataset import profile.ndjson production --replace

```bashsanity dataset import education.ndjson production --replace

cd Datasanity dataset import experience.ndjson production --replace

sanity dataset import projects.ndjson production --replace

# Import in this order (dependencies first)sanity dataset import blog.ndjson production --replace

sanity dataset import icon.ndjson production --replacesanity dataset import services.ndjson production --replace

sanity dataset import company.ndjson production --replacesanity dataset import achievements.ndjson production --replace

sanity dataset import hero.ndjson production --replacesanity dataset import certifications.ndjson production --replace

sanity dataset import contact.ndjson production --replacesanity dataset import testimonials.ndjson production --replace

sanity dataset import social.ndjson production --replacesanity dataset import siteSettings.ndjson production --replace

sanity dataset import servicesSection.ndjson production --replacesanity dataset import contact.ndjson production --replace

sanity dataset import about.ndjson production --replace```

sanity dataset import processStep.ndjson production --replace

sanity dataset import project.ndjson production --replace**Note:** Replace `production` with your dataset name if different (e.g., `development`, `staging`).

sanity dataset import testimonial.ndjson production --replace

```### Method 2: Import Using One Command



**Note:** Replace `production` with your dataset name if different.You can also use this one-liner to import all files sequentially:



## Post-Import Steps```bash

# From the project root

1. **Start your development server:**cd Data && for file in skills.ndjson profile.ndjson education.ndjson experience.ndjson projects.ndjson blog.ndjson services.ndjson achievements.ndjson certifications.ndjson testimonials.ndjson siteSettings.ndjson contact.ndjson; do sanity dataset import $file production --replace; done

   ```bash```

   npm run dev

   ```### Method 3: Import Specific Files Only



2. **Access Sanity Studio:**If you only want to import specific content types:

   Navigate to `http://localhost:3000/studio`

```bash

3. **Upload Images:**# From the Data folder

   The following schemas require image uploads:cd Data

   - **Projects**: Upload project screenshots/thumbnails

   - **Process Steps**: Upload relevant step images# Import only skills and projects

   - **Testimonials**: Upload customer profile photos (optional)sanity dataset import skills.ndjson production --replace

sanity dataset import projects.ndjson production --replace

4. **Verify Data:**

   - Check that all singleton documents are created correctly# Or import only blog posts

   - Verify icon references in services and about sections worksanity dataset import blog.ndjson production --replace

   - Ensure all required fields are populated```

   - Test navigation through the structured content

## 📋 Import Command Options

## Data Structure

### Basic Import (Replace Mode)

### Singletons (One document per type)```bash

- **Company Information** - Basic company details, brandingsanity dataset import <filename>.ndjson <dataset-name> --replace

- **Hero Section** - Homepage hero content```

- **Contact Information** - Email, phone, addressThe `--replace` flag will overwrite documents with matching `_id` values.

- **Services Section** - All service offerings in one document

- **About Section** - Mission, vision, values### Import Without Replacing

```bash

### Collections (Multiple documents)sanity dataset import <filename>.ndjson <dataset-name>

- **Social Links** - 5 social media profiles```

- **Icons** - 9 icon referencesThis will skip documents that already exist (based on `_id`).

- **Process Steps** - 4-step workflow

- **Projects** - 9 portfolio items (3 featured, 2 archived)### Import to Different Dataset

- **Testimonials** - 4 customer reviews```bash

# Import to development dataset

## Schema Relationshipssanity dataset import skills.ndjson development --replace



- `servicesSection` → references `icon` documents# Import to staging dataset

- `about.values` → references `icon` documentssanity dataset import profile.ndjson staging --replace

- All image fields use Sanity's image asset system```



## Customization### Missing Documents Mode

```bash

After import, you can:sanity dataset import <filename>.ndjson <dataset-name> --missing

- Edit content directly in Sanity Studio```

- Add more projects, testimonials, or social linksOnly import documents that don't exist in the dataset.

- Update service descriptions and features

- Modify company information and branding## 🔄 Order of Import (Important!)

- Upload and manage images

- Reorder items using the `order` fieldThe import order matters because some documents reference others. Follow this order:



## Troubleshooting1. **Skills** - Must be imported first (referenced by projects, experience, etc.)

2. **Profile** - Main profile data

**Error: "Could not resolve document reference"**3. **Education** - Educational background

- Icons must be imported before servicesSection and about4. **Experience** - Work history (references skills)

- The import scripts handle this order automatically5. **Projects** - Portfolio projects (references skills)

6. **Blog** - Blog posts (references profile as author)

**Error: "Dataset not found"**7. **Services** - Service offerings (references skills)

- Check your dataset name in `sanity.config.ts`8. **Achievements** - Awards and recognitions

- Create dataset: `sanity dataset create [name]`9. **Certifications** - Professional certifications (references skills)

- Or use existing dataset from `sanity manage`10. **Testimonials** - Client testimonials (references projects)

11. **Site Settings** - Site configuration

**Error: "Authentication required"**12. **Contact** - Contact form submissions

- Run `sanity login` to authenticate

- Ensure you have project access permissions## 🎨 Customizing the Data



**Images not showing**### Before Importing

- Image references are placeholders (`image-*`)

- Upload actual images through Sanity Studio after importYou can customize the dummy data before importing:

- Images are required for: projects, process steps, testimonials

1. Open any `.ndjson` file in a text editor

**Script won't run (Mac/Linux)**2. Modify the values (name, email, descriptions, etc.)

- Make sure script is executable: `chmod +x import-all.sh`3. Keep the structure intact (don't modify `_type`, `_id`, or reference structures)

- Check you're in the Data directory4. Save and import



## Data Source### Example: Updating Profile Data



All content is based on:Edit `profile.ndjson` and change:

- `/constants/data.json` - Source data file```json

- Sanity schemas in `/sanity/schemaTypes/`"firstName":"John" → "firstName":"YourName"

"email":"john.doe@example.com" → "email":"your.email@example.com"

## Need Help?```



- [Sanity Documentation](https://www.sanity.io/docs)### Animated Headline Feature

- [Sanity Import/Export Guide](https://www.sanity.io/docs/import-data)

- [GretTech Support](mailto:contact@grettech.com)The `profile-with-animation.ndjson` file includes the new animated headline feature:

- **headlineStaticText**: "I build "

---- **headlineAnimatedWords**: ["innovative web apps", "scalable solutions", "beautiful interfaces", "AI-powered tools"]

- **headlineAnimationDuration**: 3000ms

**Important:** The `--replace` flag will overwrite existing documents with the same `_id`. Remove this flag if you want to preserve existing data and only add new documents.

This creates a dynamic text-flipping animation in your hero section. See `ANIMATED-HEADLINE-GUIDE.md` for full documentation.

### Example: Updating Site Settings

Edit `siteSettings.ndjson` and change:
```json
"siteTitle":"John Doe - Developer" → "siteTitle":"Your Name - Developer"
"primaryColor":"#3B82F6" → "primaryColor":"#YourColor"
```

## 🖼️ Note About Images

The dummy data includes image fields but **no actual image files**. After importing, you'll need to:

1. Go to your Sanity Studio (usually at `http://localhost:3000/studio`)
2. Navigate to each document type
3. Upload images for:
   - Profile image
   - Project cover images
   - Blog featured images
   - Company logos
   - Skill icons
   - etc.

## 🧹 Cleaning Up / Starting Fresh

### Delete All Data from a Dataset
```bash
# ⚠️ WARNING: This deletes ALL documents in the dataset
sanity dataset delete production

# Create the dataset again
sanity dataset create production
```

### Delete Specific Document Types

Use the Sanity Studio Vision tool or API to delete specific types:

```groq
// In Vision tool, run this query to find documents
*[_type == "blog"]

// Then delete them manually or use the API
```

## 🔍 Verify Import Success

After importing, verify your data:

### Method 1: Using Sanity Studio
1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/studio`
3. Navigate through different document types to verify data

### Method 2: Using Vision (GROQ Playground)
1. Go to your Sanity Studio
2. Open the Vision tab
3. Run queries to verify:

```groq
// Count all documents
count(*[])

// Count specific type
count(*[_type == "project"])

// View all skills
*[_type == "skill"]{name, category, proficiency}

// View featured projects
*[_type == "project" && featured == true]{title, tagline}
```

## 📊 Data Statistics

After successful import, you should have:

- ✅ 1 complete profile with bio and contact info
- ✅ 15 diverse skills across multiple categories
- ✅ 4 work experiences with detailed descriptions
- ✅ 2 educational qualifications
- ✅ 6 portfolio projects with descriptions and tech stacks
- ✅ 6 blog posts across different categories
- ✅ 5 service offerings with pricing
- ✅ 7 achievements and awards
- ✅ 5 professional certifications
- ✅ 6 client testimonials
- ✅ 1 site settings configuration
- ✅ 3 sample contact submissions

## 🛠️ Troubleshooting

### Issue: "Command not found: sanity"

**Solution:** Install Sanity CLI globally
```bash
npm install -g @sanity/cli
```

### Issue: "Unable to find project"

**Solution:** Make sure your environment variables are set correctly
```bash
# Check your .env.local file has:
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Issue: "Authentication required"

**Solution:** Login to Sanity CLI
```bash
sanity login
```

### Issue: "Dataset not found"

**Solution:** Create the dataset first
```bash
sanity dataset create production
```

### Issue: References not working

**Solution:** Import files in the correct order (skills first, then documents that reference them)

### Issue: "Document validation failed"

**Solution:** Check your schema definitions match the data structure. Run:
```bash
npm run typegen
```

## 🎯 Next Steps After Import

1. **Upload Images**: Add real images to all documents with image fields
2. **Customize Content**: Update the dummy content with your actual information
3. **Test Your Frontend**: Verify that your Next.js app fetches and displays the data correctly
4. **Set References**: Check that all references (e.g., blog author, project technologies) are properly connected
5. **Publish Documents**: If using draft/publish workflow, publish the documents you want visible

## 📚 Additional Resources

- [Sanity CLI Documentation](https://www.sanity.io/docs/cli)
- [Sanity Import/Export Guide](https://www.sanity.io/docs/import-data)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)

## 💡 Tips

1. **Backup First**: Before importing to a production dataset, consider creating a backup
2. **Test in Development**: Import to a development dataset first to test
3. **Version Control**: Keep these data files in version control for team collaboration
4. **Customize Gradually**: Import base data, then customize piece by piece
5. **Use Vision**: The Vision tool is invaluable for testing queries and viewing data

## 🆘 Need Help?

If you encounter any issues:

1. Check the [Sanity Documentation](https://www.sanity.io/docs)
2. Visit [Sanity's Community Slack](https://slack.sanity.io/)
3. Review the error messages carefully - they usually indicate the exact problem
4. Ensure your schema definitions match the data structure

---

**Happy importing! 🚀**

Once imported, your Sanity Studio will be fully populated with professional-looking portfolio data that you can customize to match your actual experience and projects.

