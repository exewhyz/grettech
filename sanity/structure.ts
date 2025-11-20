import {
  CogIcon,
  HomeIcon,
  UserIcon,
  DocumentsIcon,
  ProjectsIcon,
  CommentIcon,
  RocketIcon,
  ComposeIcon,
  ShareIcon,
  EnvelopeIcon,
} from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Grettech Content")
    .items([
      // Company Information (Singleton)
      S.listItem()
        .title("Company Information")
        .icon(CogIcon)
        .child(
          S.document().schemaType("company").documentId("singleton-company"),
        ),

      S.divider(),

      // Hero Section (Singleton)
      S.listItem()
        .title("Hero Section")
        .icon(HomeIcon)
        .child(S.document().schemaType("hero").documentId("singleton-hero")),

      S.divider(),

      // About Section (Singleton)
      S.listItem()
        .title("About Section")
        .icon(UserIcon)
        .child(S.document().schemaType("about").documentId("singleton-about")),

      S.divider(),

      // Services
      S.listItem()
        .title("Services Section")
        .icon(DocumentsIcon)
        .child(
          S.document()
            .schemaType("servicesSection")
            .documentId("singleton-servicesSection"),
        ),

      S.divider(),

      // Process Steps
      S.listItem()
        .title("Process Steps")
        .icon(RocketIcon)
        .schemaType("processStep")
        .child(S.documentTypeList("processStep").title("Process Steps")),

      S.divider(),

      // Projects
      S.listItem()
        .title("Projects")
        .icon(ProjectsIcon)
        .child(
          S.list()
            .title("Projects")
            .items([
              S.listItem()
                .title("All Projects")
                .icon(ProjectsIcon)
                .child(
                  S.documentTypeList("project")
                    .title("All Projects")
                    .filter('_type == "project"'),
                ),

              S.listItem()
                .title("Featured Projects")
                .icon(ProjectsIcon)
                .child(
                  S.documentTypeList("project")
                    .title("Featured Projects")
                    .filter('_type == "project" && featured == true'),
                ),

              S.listItem()
                .title("Archived Projects")
                .icon(ProjectsIcon)
                .child(
                  S.documentTypeList("project")
                    .title("Archived Projects")
                    .filter('_type == "project" && archived == true'),
                ),
            ]),
        ),

      S.divider(),

      // Testimonials
      S.listItem()
        .title("Testimonials")
        .icon(CommentIcon)
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),

      S.divider(),

      // Contact Information (Singleton)
      S.listItem()
        .title("Contact Information")
        .icon(EnvelopeIcon)
        .child(
          S.document().schemaType("contact").documentId("singleton-contact"),
        ),

      S.divider(),

      // Social Links
      S.listItem()
        .title("Social Links")
        .icon(ShareIcon)
        .schemaType("social")
        .child(S.documentTypeList("social").title("Social Links")),

      S.divider(),

      // Icons (Reference)
      S.listItem()
        .title("Icons")
        .icon(ComposeIcon)
        .schemaType("icon")
        .child(S.documentTypeList("icon").title("Icons")),
    ]);
